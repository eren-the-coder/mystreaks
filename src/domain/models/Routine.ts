import { type RoutineHistory, type DayHistory, type RoutineSession } from "../types";

export class Routine {
  private _id: string;
  private _title: string;
  private _description: string;
  private _history: RoutineHistory;

  constructor(
    id: string,
    title: string,
    description: string,
    history: RoutineHistory = {}
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
    return this._history[todayKey]?.done === true;
  }

  // --------- STATS ----------

  get doneDates(): number {
    return Object.values(this._history).filter(dayInfo => dayInfo.done === true).length;
  }

  get undoneDates(): number {
    return Object.values(this._history).filter(dayInfo => dayInfo.done === false).length;
  }

  get totalDates(): number {
    return Object.keys(this._history).length;
  }

  get completionRate(): number {
    const total = this.totalDates;
    if (total === 0) return 0;
    // return parseFloat(((this.doneDates / total) * 100).toFixed(2));
    return Math.round((this.doneDates / total) * 100);
  }
  
  get bestStreak(): number {
    return Object.keys(this._history)
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
      .reduce(
        ({ max, current }, date) => this._history[date]?.done === true
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
      const isDone = this._history[date]?.done === true;

      // On ignore la date d'aujourd'hui si elle est fausse
      if (date === todayKey && !isDone) {
        continue;
      }
      
      // On calcule la série à partir de la dernière date validée
      if (isDone) {
        streak++;
      } else {
        break; // Arrête si pas fait
      }
    }
    return streak;
  }

  // --------- HISTORY LOGIC ----------
  addDateToHistory(date: Date) {
    const key = this.formatDateKey(date);
    // Utilisez 'in' pour vérifier si la clé existe
    if (!(key in this._history)) { 
      // Si la date n'existe pas du tout, on crée un nouvel objet DayHistory simple
      const newDayHistory: DayHistory = { 
        done: false 
        // Pas besoin de sessions: undefined est valide car elles sont optionnelles
      }; 

      this._history = { ...this._history, [key]: newDayHistory };
    }
    // Si la clé existe, on ne fait rien car le statut est déjà enregistré (true ou false)
  }

  public get lastDayHistory(): DayHistory | undefined {
    const dates = Object.keys(this._history);
    if (dates.length === 0) return undefined;

    // Trie pour trouver la dernière date
    const sortedDates = dates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    const lastDateKey = sortedDates[sortedDates.length - 1];
    
    return this._history[lastDateKey];
  }

  setDateStatus(date: Date, done: boolean) {
    const key = this.formatDateKey(date);
    this._history = { ...this._history, [key]: {
      done, sessions: this._history[key]?.sessions
    }};
  }

  toogleTodayStatus() {
    const todayKey = this.formatDateKey(new Date());
    const currentStatus = this.isDoneToday;

    const newDayHistory: DayHistory = {
      done: !currentStatus,
      sessions: this._history[todayKey]?.sessions // Garde les sessions existantes si elles existent
    };
    
    this._history = { ...this._history, [todayKey]: newDayHistory };
  }

  // Méthode pour ajouter une session (pour les routines chronométrées)
  public addSession(date: Date, sessionDetails: Omit<RoutineSession, 'startTime' | 'endTime'>): void {
    const key = this.formatDateKey(date);
    const now = new Date().getTime();

    const newSession: RoutineSession = {
      name: sessionDetails.name || `Session ${now}`,
      startTime: now - sessionDetails.duration * 1000,
      endTime: now,
      duration: sessionDetails.duration,
    };

    const currentDayHistory = this._history[key] || { done: false, sessions: [] };
    
    const updatedDayHistory: DayHistory = {
      done: true, // Une session = c'est fait
      sessions: [...(currentDayHistory.sessions || []), newSession]
    };

    this._history = { ...this._history, [key]: updatedDayHistory };
  }

  // Important: Mettre à jour fillMissingDays pour utiliser DayHistory
  public fillMissingDays(): void {
    const sortedDates = Object.keys(this._history).sort();
    if (sortedDates.length === 0) return;

    let currentDate = new Date(sortedDates[sortedDates.length - 1]);
    currentDate.setDate(currentDate.getDate() + 1);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    while (currentDate < today) {
      const key = this.formatDateKey(currentDate);
      if (!(key in this._history)) {
        // Marque comme non fait, sans sessions
        const newDayHistory: DayHistory = { done: false }; 
        this._history = { ...this._history, [key]: newDayHistory };
      }
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
