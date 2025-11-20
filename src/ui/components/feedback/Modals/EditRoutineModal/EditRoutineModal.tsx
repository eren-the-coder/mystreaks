import { useState, useEffect } from "react";
// @ts-ignore
import Modal from "react-modal";
import styles from "./EditRoutineModal.module.css";
import { Routine } from "../../../../../domain/models/Routine";
import { routineManager } from "../../../../../services/RoutineManager";

Modal.setAppElement("#root");

interface FormDataType {
  title: string;
  description: string;
}

interface EditRoutineModalProps {
  routineId?: string;
  modalIsOpen: boolean;
  closeModal: () => void;
  onSubmit: (data: Routine) => void;
}

export const EditRoutineModal = ({
  routineId,
  modalIsOpen,
  closeModal,
  onSubmit,
}: EditRoutineModalProps) => {
  const existingRoutine = routineManager.getRoutineById(routineId || "");

  const [formDatas, setFormDatas] = useState<FormDataType>({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (existingRoutine) {
      setFormDatas({
        title: existingRoutine.title,
        description: existingRoutine.description,
      });
    } else {
      setFormDatas({ title: "", description: "" });
    }
  }, [existingRoutine, routineId, modalIsOpen]);

  const handleSubmit = () => {
    const routineHistory = existingRoutine ? existingRoutine.history : {};
    
    const submittedRoutine = new Routine(
      routineId || "",
      formDatas.title,
      formDatas.description,
      routineHistory
    );

    onSubmit(submittedRoutine);
    closeModal(); 
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormDatas((prev) => ({ ...prev, [name]: value }));
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
        <h2 className={styles.title}>{routineId ? "Modifier la routine" : "Ajouter une routine"}</h2>
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
          placeholder="Titre"
          value={formDatas.title}
          required
          onChange={handleChange}
          className={styles.input}
        />

        <textarea
          name="description"
          placeholder="Description..."
          value={formDatas.description}
          onChange={handleChange}
          className={styles.textarea}
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
