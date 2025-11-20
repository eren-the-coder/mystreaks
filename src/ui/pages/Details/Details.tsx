// import { useRoutines } from "../../../context/RoutineContext";
import { StreakCalendar } from "../../components/StreakCalendar/StreakCalendar";
import { useNavigate, useParams } from "react-router-dom";
import { routineManager } from "../../../services/RoutineManager";
import styles from "./Details.module.css";
import { ArrowLeft, Check, Pencil, Trash2 } from "lucide-react";

export const Details = () => {
  // const { routines } = useRoutines();

  const { routineId } = useParams<{ routineId: string }>();
  const navigate = useNavigate();

  const routine = routineManager.getRoutineById(routineId || "");

  if (!routine) {
    return <div className={styles.notFound}>Routine introuvable</div>;
  }

  // Détermination emoji selon score
  const streak = routine.currentStreak;
  const getStreakEmoji = () => {
    if (streak >= 15) return "🔥🔥"; // excellent
    if (streak >= 10) return "🔥"; // très bon
    if (streak >= 5) return "💪"; // bon
    if (streak >= 3) return "🙂"; // moyen
    return "😴"; // faible
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button
          onClick={() => navigate(-1)}
          className={styles.iconBtn}>
            <ArrowLeft size={20} />
          </button>
          <h1 className={styles.title}>Détails</h1>
        </div>

        <div className={styles.headerRight}>
          <button className={styles.iconBtn}><Check size={20} /></button>
          <button className={styles.iconBtn}><Pencil size={20} /></button>
          <button className={styles.iconBtnDelete}><Trash2 size={20} /></button>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.sectionCard}>
          <h2 className={styles.routineTitle}>{routine.title}</h2>
          <p className={styles.routineDesc}>{routine.description}</p>

          <details className={styles.statsDetails}>
            <summary>Statistiques</summary>
            <ul>
              <li>Série actuelle : {routine.currentStreak} jours</li>
              <li>Meilleure série : {routine.bestStreak} jours</li>
              <li>Taux de complétion : {routine.completionRate}%</li>
            </ul>
          </details>
        </section>

        <section className={styles.sectionCard}>
          <div className={styles.streakBox}>
            <div className={styles.streakInfo}>
              <h1 className={styles.streakNumber}>{routine.currentStreak}</h1>
              <p className={styles.streakLabel}>Jours consécutifs</p>
              <p className={styles.streakMessage}>
                {routine.currentStreak === routine.bestStreak && (
                  <span>Record égalé ! 🥳</span>
                )}
                {routine.currentStreak > routine.bestStreak && (
                  <span>Nouvelle meilleure série ! 🔥</span>
                )}
              </p>
            </div>

            <div className={styles.streakEmoji}>{getStreakEmoji()}</div>
          </div>

          <div>
            <progress
              className={styles.progressBar}
              value={routine.currentStreak}
              max={routine.bestStreak || 1}
            />
            <div className={styles.progressLabels}>
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        </section>

        <section className={styles.sectionCard}>
          <h3>Calendrier de série</h3>
          <StreakCalendar routineHistory={routine.history} />
        </section>
      </main>
    </div>
  );
};