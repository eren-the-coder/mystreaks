/* Format date as "dd, mm, yyyy" */
export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };
  return date.toLocaleDateString("fr-FR", options);
}

/* Format date as "yyyy-mm-dd" */
export const formatDateISO = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  };
  return date.toLocaleDateString("en", options);
}