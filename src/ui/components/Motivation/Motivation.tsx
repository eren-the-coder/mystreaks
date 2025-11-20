import { useState, useEffect } from 'react';
import { getRandomCitation } from '../../../services/citationService';
import type { Citation } from '../../../services/citationService';
import styles from './Motivation.module.css';

export const Motivation = () => {
  const [citation, setCitation] = useState<Citation | null>(null);

  useEffect(() => {
    const newCitation = getRandomCitation();
    setCitation(newCitation);
  }, []);

  if (!citation) {
    return <div className={styles.loading}>Chargement de l'inspiration...</div>;
  }

  return (
    <div className={styles.card}>
      <p className={styles.text}>"{citation.text}"</p>
      <p className={styles.author}>— {citation.author}</p>
    </div>
  );
};
