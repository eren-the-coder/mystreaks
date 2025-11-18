export type RoutineHistory = Record<string, boolean>;

export interface RoutineData {
  id: string;
  title: string;
  description: string;
  history: RoutineHistory;
}
