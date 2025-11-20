import { createContext, useContext, useState, useMemo, type ReactNode } from "react";
import { routineManager, RoutineManager } from "../services/RoutineManager";
import { Routine } from "../domain/models/Routine";

interface RoutineContextType {
  routines: Routine[];
  addRoutine: (routine: Routine) => void;
  updateRoutine: (routine: Routine) => void;
  removeRoutine: (id: string) => void;
  saveRoutineSession: (routineId: string, durationInSeconds: number, sessionName: string) => void;
  toggleRoutineStatus: (id: string) => void;
  undoneRoutinesCount: number;
  donesRoutinesCount: number;
  routinesCount: number;
  routinesCompletionRate: number;
};
const RoutineContext = createContext<RoutineContextType>({
  routines: [],
  addRoutine: () => {},
  updateRoutine: () => {},
  removeRoutine: () => {},
  saveRoutineSession: () => {},
  undoneRoutinesCount: 0,
  donesRoutinesCount: 0,
  routinesCount: 0,
  routinesCompletionRate: 0,
  toggleRoutineStatus: () => {}
});

export const RoutineProvider = ({ children }: { children: ReactNode }) => {
  const [routines, setRoutines] = useState<Routine[]>(routineManager.routines);

  const addRoutine = (routine: Routine) => {
    routineManager.addRoutine(routine);
    setRoutines([...routineManager.routines]);
  };

  const updateRoutine = (routine: Routine) => {
    routineManager.updateRoutine(routine);
    setRoutines([...routineManager.routines]);
  }

  const removeRoutine = (id: string) => {
    routineManager.removeRoutine(id);
    setRoutines([...routineManager.routines]);
  };

  const saveRoutineSession = (routineId: string, durationInSeconds: number, sessionName: string) => {
    const routine = routineManager.getRoutineById(routineId);
    if (routine) {
      routine.addSession(new Date(), { name: sessionName, duration: durationInSeconds });
      routineManager.saveRoutines();
      setRoutines([...routineManager.routines]);
    }
  };

  const toggleRoutineStatus = (id: string) => {
    const routine = routineManager.getRoutineById(id);
    if (routine) {
      routine.toogleTodayStatus();
      routineManager.saveRoutines(); 
      setRoutines([...routineManager.routines]); 
    }
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
      updateRoutine,
      removeRoutine,
      toggleRoutineStatus,
      saveRoutineSession,
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
