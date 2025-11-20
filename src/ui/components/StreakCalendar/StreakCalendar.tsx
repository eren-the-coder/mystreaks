import { useMemo, useState } from "react";
import type { RoutineHistory } from "../../../domain/types";
import styles from "./StreakCalendar.module.css";

const months = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];
const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

export const StreakCalendar = (
  { routineHistory }: { routineHistory: RoutineHistory }
) => {

  const date = useMemo(() => new Date(), []);
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  const goToPrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(prev => prev - 1);
      return;
    }
    setMonth(prev => prev - 1);
  }

  const goToNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(prev => prev + 1);
      return;
    }
    setMonth(prev => prev + 1);
  }

  const monthName = useMemo(() => months[month], [month]);

  const firstDayInWeek = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const calendarDaysInfo = useMemo(() => {
    const prevDays = Array.from({ length: firstDayInWeek ? firstDayInWeek - 1 : 6 },
      (_, i) => ({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        dateKey: ""
      })
    ).reverse();

    const currentMonthDays = Array.from({ length: daysInMonth },
      (_, i) => {
        const day = i + 1;
        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return {
          day: day,
          isCurrentMonth: true,
          dateKey: dateKey
        };
      }
    );

    const nextMonthDays = Array.from({ length: 42 - (prevDays.length + currentMonthDays.length) },
      (_, i) => ({
        day: i + 1,
        isCurrentMonth: false,
        dateKey: ""
      })
    );

    return [...prevDays, ...currentMonthDays, ...nextMonthDays];

  }, [year, month, firstDayInWeek, daysInMonth, daysInPrevMonth]);

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <button className={styles.navBtn} onClick={goToPrevMonth}>{'<'}</button>
        <h2 className={styles.title}>{monthName} {year}</h2>
        <button className={styles.navBtn} onClick={goToNextMonth}>{'>'}</button>
      </div>

      <div className={styles.gridWrapper}>
        <div className={styles.weekDays}>
          {days.map((day) => (
            <div className={styles.weekDay} key={day}>{day}</div>
          ))}
        </div>

        <div className={styles.calendarGrid}>
          {calendarDaysInfo.map((dayInfo, index) => {
            const status = routineHistory[dayInfo.dateKey];

            let content: React.ReactNode;

            if (status === true) {
              content = '🔥';
            } else if (status === false) {
              content = '🧊';
            } else {
              content = dayInfo.day;
            }

            const className = dayInfo.isCurrentMonth
              ? styles.day
              : styles.dayFaded;

            return (
              <div key={index} className={className}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
