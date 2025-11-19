import styles from "./RoutineItem.module.css";
import type { Routine } from "../../../../domain/models/Routine";
import { useState } from "react";
import { useId } from "react";

interface RoutineItemProps {
  routine: Routine;
}

export const RoutineItem = ({ routine }: RoutineItemProps) => {
  const [checked, setChecked] = useState(routine.isDoneToday);
  const id = useId();
  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <input
          type="checkbox"
          checked={checked}
          id={id}
          className={styles.checkbox}
          onChange={() => {
            routine.toogleTodayStatus();
            setChecked(routine.isDoneToday);
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
