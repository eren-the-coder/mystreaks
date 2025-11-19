import { useState } from "react";
// @ts-ignore
import Modal from "react-modal";
import styles from "./EditRoutineModal.module.css";
import { Routine } from "../../../../../domain/models/Routine";

Modal.setAppElement("#root");

interface FormDataType {
  title: string;
  description: string;
  error: string;
}

interface EditRoutineModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  onSubmit: (data: Routine) => void;
}

export const EditRoutineModal = ({
  modalIsOpen,
  closeModal,
  onSubmit,
}: EditRoutineModalProps) => {
  const [formDatas, setFormDatas] = useState<FormDataType>({
    title: "",
    description: "",
    error: "",
  });

  const handleSubmit = () => {
    onSubmit(
      new Routine(
        "",
        formDatas.title,
        formDatas.description,
        {}
      )
    );
    resetAndClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormDatas((prev) => ({ ...prev, [name]: value }));
  };

  const clearForm = () => {
    setFormDatas({ title: "", description: "", error: "" });
  };

  const resetAndClose = () => {
    clearForm();
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
        <h2 className={styles.title}>Modifier la routine</h2>
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
        {formDatas.error && (
          <span className={styles.error}>{formDatas.error}</span>
        )}

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
