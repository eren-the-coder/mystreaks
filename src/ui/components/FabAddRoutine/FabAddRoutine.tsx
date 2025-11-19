import { FiPlus } from "react-icons/fi";
import styles from "./FabAddRoutine.module.css";

export const FabAddRoutine = ({ onPress }: { onPress: () => void }) => {
  return (
    <button
      className={styles.fab}
      aria-label="Ajouter une routine"
      onClick={onPress}
    >
      <FiPlus className={styles.icon} />
    </button>
  );
};
