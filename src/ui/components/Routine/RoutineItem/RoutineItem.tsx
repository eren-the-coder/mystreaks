import styles from "./RoutineItem.module.css";
import type { Routine } from "../../../../domain/models/Routine";
import { useState } from "react";

interface RoutineItemProps {
  routine: Routine;
}

export const RoutineItem = ({ routine }: RoutineItemProps) => {
  const [checked, setChecked] = useState(routine.isDoneToday);

  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <input
          type="checkbox"
          checked={checked}
          id="routine-check"
          className={styles.checkbox}
          onChange={() => {
            routine.toogleTodayStatus();
            setChecked(routine.isDoneToday);
          }}
        />
        <div className={styles.texts}>
          <label htmlFor="routine-check" className={styles.title}>
            {routine.title}
          </label>

          <div className={styles.subtitle}>{routine.description}</div>
          <div className={styles.streak}>série de {routine.currentStreak} jours</div>
        </div>
      </div>
    </div>
  );
};
