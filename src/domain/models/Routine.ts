import { type RoutineHistory } from "../types";

export class Routine {
  private _id: string;
  private _title: string;
  private _description: string;
  private _history: RoutineHistory;

  constructor(
    id: string,
    title: string,
    description: string,
    history: RoutineHistory
  ) {
    this._id = id || new Date().getTime().toString();
    this._title = title;
    this._description = description;
    this._history = history;
  }

  // --------- GETTERS / SETTERS ----------
  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description() {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get history() {
    return this._history;
  }

  get isDoneToday(): boolean {
    const todayKey = this.formatDateKey(new Date());
    return this._history[todayKey] === true;
  }

  // --------- STATS ----------

  get doneDates(): number {
    return Object.values(this._history).filter((done) => done).length;
  }

  get undoneDates(): number {
    return Object.values(this._history).filter((done) => !done).length;
  }

  get totalDates(): number {
    return Object.keys(this._history).length;
  }

  get completionRate(): number {
    const total = this.totalDates;
    if (total === 0) return 0;
    return parseFloat(((this.doneDates / total) * 100).toFixed(2));
  }
  
  get bestStreak(): number {
    return Object.keys(this._history)
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
      .reduce(
        ({ max, current }, date) => this._history[date]
          ? { max: Math.max(max, current + 1), current: current + 1 }
          : { max, current: 0 },
        { max: 0, current: 0 }
      ).max;
  }

  get currentStreak(): number {
    const sortedDates = Object.keys(this._history).sort(
      (a, b) => new Date(b).getTime() - new Date(a).getTime()
    );

    const todayKey = this.formatDateKey(new Date());

    let streak = 0;
    for (const date of sortedDates) {
      // On ignore la date d'aujourd'hui si elle est fausse,
      // on ne veut pas qu'elle interrompe la série.
      if (date === todayKey && !this._history[date]) {
        continue;
      }
      
      // On calcule la série à partir de la dernière date validée
      if (this._history[date]) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  }

  // --------- HISTORY LOGIC ----------
  addDateToHistory(date: Date) {
  const key = this.formatDateKey(date);
    if (!this._history[key]) {
      this._history = { ...this._history, [key]: false };
    }
  }

  setDateStatus(date: Date, done: boolean) {
    const key = this.formatDateKey(date);
    this._history = { ...this._history, [key]: done };
  }

  toogleTodayStatus() {
    const todayKey = this.formatDateKey(new Date());
    this._history = { ...this._history, [todayKey]: !this.isDoneToday };
  }

  public fillMissingDays(): void {
    const sortedDates = Object.keys(this._history).sort();
    // Si l'historique est vide, on s'arrête ici, pas de jours manquants à remplir.
    if (sortedDates.length === 0) {
        return;
    }

    let currentDate = new Date(sortedDates[sortedDates.length - 1]);
    currentDate.setDate(currentDate.getDate() + 1); // Commencer à partir du jour suivant le dernier enregistré

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normaliser aujourd'hui à minuit

    // Tant que la date que nous vérifions est antérieure à aujourd'hui
    while (currentDate < today) {
      const key = this.formatDateKey(currentDate);
      // Si la date n'est pas déjà dans l'histoire (elle ne devrait pas l'être si la logique est bonne)
      if (!(key in this._history)) {
          this._history = { ...this._history, [key]: false };
      }
      // Passer au jour suivant
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  // --------- HELPERS ----------
  /** Format date as YYYY-MM-DD */
  private formatDateKey(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
}
