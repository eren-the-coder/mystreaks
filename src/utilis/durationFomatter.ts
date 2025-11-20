/**
 * Formatte une durée en secondes en une chaîne de caractères lisible.
 * @param durationInSeconds La durée totale en secondes.
 * @returns Une chaîne de caractères formatée (ex: "1 heure 30 min 15 sec" ou "45 min").
 */
export const formatDuration = (durationInSeconds: number): string => {
  if (durationInSeconds < 0) {
    return "Durée invalide";
  }

  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = durationInSeconds % 60;

  let result = '';

  if (hours > 0) {
    result += `${hours} heure${hours > 1 ? 's' : ''} `;
  }

  if (minutes > 0) {
    result += `${minutes} min `;
  }

  if (seconds > 0 || result === '') {
    // Affiche les secondes si > 0, ou si la durée totale est 0
    result += `${seconds} sec`; 
  }

  // Nettoie les espaces superflus à la fin
  return result.trim();
};
