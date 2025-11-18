import { EmptyRoutineList } from "../../feedback/EmptyRoutineList/EmptyRoutineList"
import { RoutineItem } from "../RoutineItem/RoutineItem"
import { useRoutines } from "../../../../context/RoutineContext"

export const RoutineList = () => {
  const { routines } = useRoutines();

  if (routines.length === 0) {
    return <EmptyRoutineList />;
  }

  return (
    <div>
      {routines.map((r) => (
        <RoutineItem key={r.id} routine={r} />
      ))}
    </div>
  )
}
