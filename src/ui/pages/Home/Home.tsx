import type { Routine } from "../../../domain/models/Routine";
import { HomeHeader } from "../../components/headers/HomeHeader/HomeHeader";
import { RoutineList } from "../../components/Routine/RoutineList/RoutineList";
import { RoutineStats } from "../../components/Routine/RoutineStats/RoutineStats";
import { FabAddRoutine } from "../../components/FabAddRoutine/FabAddRoutine";
import { EditRoutineModal } from "../../components/feedback/Modals/EditRoutineModal/EditRoutineModal";
import { useRoutines } from "../../../context/RoutineContext";
import { useModal } from "../../hooks/useModal";
import { Motivation } from "../../components/Motivation/Motivation";

export const Home = () => {
  const { isOpen, closeModal, openModal } = useModal();
  const { addRoutine } = useRoutines();

  return (
    <div>
      <HomeHeader />
      <RoutineStats />
      <Motivation />
      <RoutineList />
      <FabAddRoutine onPress={openModal} />
      <EditRoutineModal
        modalIsOpen={isOpen}
        closeModal={closeModal}
        onSubmit={(routine: Routine) => {
          addRoutine(routine);
        }}
      />
    </div>
  )
}
