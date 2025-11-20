import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRoutines } from '../../../context/RoutineContext';
import styles from './SessionTimerPage.module.css';
import { FiArrowLeft, FiPlay, FiPause, FiSquare } from "react-icons/fi";

export const SessionTimerPage = () => {
  const { routineId } = useParams<{ routineId: string }>();
  const navigate = useNavigate();
  const { routines, saveRoutineSession } = useRoutines();

  const routine = routines.find(r => r.id === routineId);

  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [sessionName, setSessionName] = useState('');
  const intervalRef = useRef<number | null>(null);

  // Timer logic
  useEffect(() => {
    if (isRunning && !isPaused) {
      intervalRef.current = window.setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, isPaused]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  const handleStart = () => {
    setSeconds(0);
    setIsPaused(false);
    setIsRunning(true);
  };

  const handlePauseResume = () => {
    setIsPaused(prev => !prev);
  };

  const handleStop = () => {
    if (seconds > 0 && routineId) {
      saveRoutineSession(routineId, seconds, sessionName || 'Session sans nom');
      alert(`Session de ${formatTime(seconds)} enregistrée !`);
    }
    setIsRunning(false);
    setIsPaused(false);
  };

  const handleGoBack = () => {
    if (isRunning && seconds > 0) {
      if (!window.confirm("Le chronomètre est en cours. Quitter ?")) return;
    }
    navigate(-1);
  };

  if (!routine) {
    return <div className={styles.container}>Routine introuvable.</div>;
  }

  return (
    <div className={styles.container}>
      
      {/* HEADER */}
      <header className={styles.header}>
        <button onClick={handleGoBack} className={styles.backButton}>
          <FiArrowLeft />
        </button>
        <h1 className={styles.title}>Session : {routine.title}</h1>
      </header>

      {/* TIMER */}
      <div className={styles.timerDisplay}>{formatTime(seconds)}</div>

      {/* CONTROLS */}
      <div className={styles.controls}>
        {!isRunning && (
          <button className={`${styles.actionButton} ${styles.start}`} onClick={handleStart}>
            <FiPlay /> Démarrer
          </button>
        )}

        {isRunning && (
          <>
            <button className={styles.pauseButton} onClick={handlePauseResume}>
              {isPaused ? <><FiPlay /> Reprendre</> : <><FiPause /> Pause</>}
            </button>

            <button className={`${styles.actionButton} ${styles.stop}`} onClick={handleStop}>
              <FiSquare /> Stop & Save
            </button>
          </>
        )}
      </div>

      {/* SESSION NAME */}
      <div className={styles.sessionDetails}>
        <label htmlFor="sessionName">Nom de la session</label>
        <input
          id="sessionName"
          type="text"
          value={sessionName}
          onChange={(e) => setSessionName(e.target.value)}
          placeholder="ex: Révision chapitre 1"
          className={styles.inputName}
        />
      </div>
    </div>
  );
};
