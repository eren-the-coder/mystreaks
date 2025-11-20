import styles from "./RoutineItem.module.css";
import type { Routine } from "../../../../domain/models/Routine";
import { useRoutines } from "../../../../context/RoutineContext";
import { useNavigate } from "react-router-dom"; // Assurez-vous d'utiliser react-router-dom

// Importer l'icône de chronomètre (exemple avec Font Awesome Regular)
import { FaRegClock } from "react-icons/fa";

interface RoutineItemProps {
  routine: Routine;
}

export const RoutineItem = ({ routine }: RoutineItemProps) => {
  const { toggleRoutineStatus } = useRoutines();
  const navigate = useNavigate();

  // Fonction de gestion du clic sur le chronomètre
  const handleTimerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Empêche le clic de se propager au div parent (qui a son propre onClick)
    navigate(`/timer/${routine.id}`);
  };

  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <input
          type="checkbox"
          checked={routine.isDoneToday}
          className={styles.checkbox}
          onChange={() => {
            toggleRoutineStatus(routine.id);
          }}
        />
        <div
          onClick={() => {
            navigate(`/details/${routine.id}`);
          }}
          className={styles.texts}
        >
          <h2 className={styles.title}>
            {routine.title}
          </h2>

          <div className={styles.subtitle}>{routine.description}</div>
          <div className={styles.streak}>série de {routine.currentStreak} jours</div>
        </div>
      </div>
      
      {/* ⭐️ NOUVEAU : Le bouton chronomètre à droite ⭐️ */}
      <button 
        onClick={handleTimerClick} 
        className={styles.timerButton} // Ajoutez un style spécifique pour ce bouton
        title="Démarrer une session chronométrée"
      >
        <FaRegClock />
      </button>

    </div>
  );
};
