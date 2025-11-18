import { createContext, useContext, useState, type ReactNode } from "react";
import { routineManager } from "../services/RoutineManager";
import { Routine } from "../domain/models/Routine";

interface RoutineContextType {
  routines: Routine[];
  addRoutine: (routine: Routine) => void;
  removeRoutine: (id: string) => void;
  undoneRoutinesCount: number;
  donesRoutinesCount: number;
  routinesCount: number;
  routinesCompletionRate: number;
};
const RoutineContext = createContext<RoutineContextType>({
  routines: [],
  addRoutine: () => {},
  removeRoutine: () => {},
  undoneRoutinesCount: 0,
  donesRoutinesCount: 0,
  routinesCount: 0,
  routinesCompletionRate: 0,
});

export const RoutineProvider = ({ children }: { children: ReactNode }) => {
  const [routines, setRoutines] = useState<Routine[]>(routineManager.routines);

  const addRoutine = (routine: Routine) => {
    routineManager.addRoutine(routine);
    setRoutines([...routineManager.routines]);
  };

  const removeRoutine = (id: string) => {
    routineManager.removeRoutine(id);
    setRoutines([...routineManager.routines]);
  };

  const donesRoutinesCount = routineManager.donesRoutinesCount;
  const undoneRoutinesCount = routineManager.undoneRoutinesCount;
  const routinesCount = routineManager.routinesCount;
  const routinesCompletionRate = routineManager.routinesCompletionRate;

  return (
    <RoutineContext.Provider value={{
      routines,
      addRoutine,
      removeRoutine,
      undoneRoutinesCount,
      donesRoutinesCount,
      routinesCount,
      routinesCompletionRate,
    }}>
      {children}
    </RoutineContext.Provider>
  );
};

export const useRoutines = () => useContext<RoutineContextType>(RoutineContext);
