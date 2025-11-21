import { EmptyRoutineList } from "../../feedback/EmptyRoutineList/EmptyRoutineList"
import { RoutineItem } from "../RoutineItem/RoutineItem"
import { useRoutines } from "../../../../context/RoutineContext"
import styles from "./RoutineList.module.css"

export const RoutineList = () => {
  const { routines } = useRoutines();

  if (routines.length === 0) {
    return <EmptyRoutineList />;
  }

  return (
    <div className={styles.container}>
      {routines.map((r) => (
        <RoutineItem key={r.id} routine={r} />
      ))}
    </div>
  )
}
