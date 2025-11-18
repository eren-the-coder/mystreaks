import styles from "./EmptyRoutineList.module.css";

export const EmptyRoutineList = () => {
  return (
    <div className={styles.empty}>
      <div className={styles.icon}>✨</div>

      <h2 className={styles.title}>Aucune routine pour le moment</h2>
      <p className={styles.subtitle}>
        Ajoute tes premières habitudes pour commencer ton aventure de streaks.
      </p>
    </div>
  );
};
