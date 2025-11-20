import styles from "./HomeHeader.module.css";
import { useTheme } from "../../../hooks/useTheme";
import { FiSun, FiMoon } from "react-icons/fi";

export const HomeHeader = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>MyStreaks.</h1>

      <button
        className={styles.themeButton}
        aria-label="Changer de thème"
        onClick={toggleTheme}
      >
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </button>
    </header>
  );
};
