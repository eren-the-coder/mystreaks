import { createContext, useContext, useState, type ReactNode } from "react";
import { routineManager } from "../services/RoutineManager";
import { Routine } from "../domain/models/Routine";

interface RoutineContextType {
  routines: Routine[];
  addRoutine: (routine: Routine) => void;
  removeRoutine: (id: string) => void;
};
const RoutineContext = createContext<RoutineContextType | null>(null);

export const RoutineProvider = ({ children }: { children: ReactNode }) => {
  const [routines, setRoutines] = useState(routineManager.routines);

  const addRoutine = (routine: Routine) => {
    routineManager.addRoutine(routine);
    setRoutines([...routineManager.routines]);
  };

  const removeRoutine = (id: string) => {
    routineManager.removeRoutine(id);
    setRoutines([...routineManager.routines]);
  };

  return (
    <RoutineContext.Provider value={{ routines, addRoutine, removeRoutine }}>
      {children}
    </RoutineContext.Provider>
  );
};

export const useRoutines = () => useContext(RoutineContext);
