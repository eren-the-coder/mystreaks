import styles from "./RoutineStats.module.css";
import { useRoutines } from "../../../../context/RoutineContext";
import { formatDate } from "../../../../utilis/dateFormatter";

export const RoutineStats = () => {
  const {
    donesRoutinesCount,
    undoneRoutinesCount,
    routinesCount,
    routinesCompletionRate
  } = useRoutines();
  return (
    <section className={styles.statsSection}>
      <div className={styles.dateContainer}>
        <h2 className={styles.dateTitle}>Aujourd'hui</h2>
        <h3 className={styles.dateSub}>{formatDate(new Date())}</h3>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.completionRate}>{routinesCompletionRate}%</div>

        <div className={styles.details}>
          <h3 className={styles.detailText}>{donesRoutinesCount} sur {routinesCount} habitudes complétées</h3>
          <h3 className={styles.detailTextMuted}>{undoneRoutinesCount} restantes</h3>
        </div>
      </div>
    </section>
  );
};
