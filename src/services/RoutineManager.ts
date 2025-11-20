import { Routine } from "../domain/models/Routine";
import type { RoutineData } from "../domain/types";

export class RoutineManager {
  private _routines: Routine[];
  private readonly STORAGE_KEY = "routines_storage";
  
  constructor() {
    this._routines = this.loadRoutines();
  }

  get routines() {
    return this._routines;
  }

  addRoutine(routine: Routine) {
    this._routines = [...this._routines, routine];
    this.saveRoutines();
  }

  updateRoutine(routine: Routine) {
    this._routines = this._routines.map(r => r.id === routine.id ? routine : r);
    console.table(this._routines);
    this.saveRoutines();
  }
 
  removeRoutine(routineId: string) {
    this._routines = this._routines.filter(r => r.id !== routineId);
    this.saveRoutines();
  }

  getRoutineById(routineId: string): Routine | undefined {
    return this._routines.find(r => r.id === routineId);
  }

  get routinesCount(): number {
    return this._routines.length;
  }
  
  public static getDonesCount(routinesList: Routine[]): number {
    return routinesList.filter(r => r.isDoneToday).length;
  }
  
  public static getUndoneCount(routinesList: Routine[]): number {
    return routinesList.filter(r => !r.isDoneToday).length;
  }

  public static getCompletionRate(routinesList: Routine[]): number {
    const total = routinesList.length;
    if (total === 0) return 0;
    const done = RoutineManager.getDonesCount(routinesList);
    // Return percentage with no decimals
    return Math.round((done / total) * 100);
    // For decimal percentage, use:
    // return parseFloat(((done / total * 100).toFixed(2)));
  }

  private loadRoutines(): Routine[] {
    try {
      const storedData = localStorage.getItem(this.STORAGE_KEY);
      if (!storedData) {
        return [];
      }
      
      const stored: RoutineData[] = JSON.parse(storedData);
      if (!Array.isArray(stored)) {
          console.error("Stored data is not an array, returning empty list.");
          return [];
      }
      
      const routines = stored.map(r => new Routine(r.id, r.title, r.description, r.history));
      return routines;

    } catch (error) {
      console.error("Error loading routines from localStorage:", error);
      return [];
    }
  }

  public saveRoutines() {
    const dataToSave = this._routines.map(r => ({
      id: r.id,
      title: r.title,
      description: r.description,
      history: r.history,
    }));

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(dataToSave));
  }
}

export const routineManager = new RoutineManager();