import { createContext, useContext, useState, useMemo, type ReactNode } from "react";
import { routineManager, RoutineManager } from "../services/RoutineManager";
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
    console.log("[(func)addRoutine] Adding routine:", routine);    
    routineManager.addRoutine(routine);
    setRoutines([...routineManager.routines]);
  };

  const removeRoutine = (id: string) => {
    routineManager.removeRoutine(id);
    setRoutines([...routineManager.routines]);
  };

  const {
    donesRoutinesCount,
    undoneRoutinesCount,
    routinesCount,
    routinesCompletionRate
  } = useMemo(() => {
    
    const totalCount = routines.length;
    const doneCount = RoutineManager.getDonesCount(routines);
    const undoneCount = RoutineManager.getUndoneCount(routines);
    const completionRate = RoutineManager.getCompletionRate(routines);

    console.log("Recalculating routine stats:", {
      totalCount,
      doneCount,
      undoneCount,
      completionRate
    });
    

    return {
      donesRoutinesCount: doneCount,
      undoneRoutinesCount: undoneCount,
      routinesCount: totalCount,
      routinesCompletionRate: completionRate,
    };
    
  }, [routines]);

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

export const useRoutines = () => {
  const context = useContext<RoutineContextType>(RoutineContext);
  if (!context) {
    throw new Error("useRoutines must be used within a RoutineProvider");
  }
  return context;
};
