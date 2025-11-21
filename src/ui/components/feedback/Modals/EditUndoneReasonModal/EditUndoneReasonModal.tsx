import { useState, useEffect } from "react";
// @ts-ignore
import Modal from "react-modal";
import styles from "./EditUndoneReasonModal.module.css";
import { routineManager } from "../../../../../services/RoutineManager";

Modal.setAppElement("#root");

interface EditUndoneReasonModalProps {
  routineId?: string;
  modalIsOpen: boolean;
  closeModal: () => void;
  onSubmit: (reason: string) => void;
  dateKey: string | null;
}

export const EditUndoneReasonModal = ({
  routineId,
  modalIsOpen,
  closeModal,
  onSubmit,
  dateKey
}: EditUndoneReasonModalProps) => {
  const existingRoutine = routineManager.getRoutineById(routineId || "");

  const [reason, setReason] = useState("");

  useEffect(() => {
    if (!dateKey) return;
    setReason(existingRoutine?.history[dateKey].undoneReason ?? "");
  }, [existingRoutine, routineId, modalIsOpen]);

  const handleSubmit = () => {
    onSubmit(reason);
    closeModal(); 
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setReason(value);
  };

  const resetAndClose = () => {
    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={resetAndClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <header className={styles.header}>
        <h2 className={styles.title}>Raison de l'échec</h2>
        <button onClick={resetAndClose} className={styles.closeBtn}>
          ✕
        </button>
      </header>

      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Raison de l'échec"
          value={reason}
          required
          onChange={handleChange}
          className={styles.input}
        />

        <div className={styles.actions}>
          <button type="button" onClick={resetAndClose} className={styles.cancel}>
            Annuler
          </button>
          <button type="submit" className={styles.submit}>
            Valider
          </button>
        </div>
      </form>
    </Modal>
  );
};
