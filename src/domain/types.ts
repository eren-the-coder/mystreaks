export interface RoutineSession {
  name: string;
  startTime: number;
  endTime: number;
  duration: number;
}

export interface DayHistory {
  done: boolean;
  sessions?: RoutineSession[];
  undoneReason?: string;
}

export type RoutineHistory = Record<string, DayHistory>;

export interface RoutineData {
  id: string;
  title: string;
  description: string;
  history: RoutineHistory;
}
