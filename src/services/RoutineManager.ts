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
  
  get donesRoutinesCount() : number {
    return this._routines.filter(r => r.isDoneToday()).length;
  }

  get undoneRoutinesCount() : number {
    return this._routines.filter(r => !r.isDoneToday()).length;
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

  private saveRoutines() {
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