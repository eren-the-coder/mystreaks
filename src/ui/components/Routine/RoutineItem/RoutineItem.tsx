import styles from "./RoutineItem.module.css";
import type { Routine } from "../../../../domain/models/Routine";
import { useId } from "react";
import { useRoutines } from "../../../../context/RoutineContext";

interface RoutineItemProps {
  routine: Routine;
}

export const RoutineItem = ({ routine }: RoutineItemProps) => {
  const { toggleRoutineStatus } = useRoutines();
  const id = useId();
  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <input
          type="checkbox"
          checked={routine.isDoneToday}
          id={id}
          className={styles.checkbox}
          onChange={() => {
            toggleRoutineStatus(routine.id);
          }}
        />
        <div className={styles.texts}>
          <label htmlFor={id} className={styles.title}>
            {routine.title}
          </label>

          <div className={styles.subtitle}>{routine.description}</div>
          <div className={styles.streak}>série de {routine.currentStreak} jours</div>
        </div>
      </div>
    </div>
  );
};
