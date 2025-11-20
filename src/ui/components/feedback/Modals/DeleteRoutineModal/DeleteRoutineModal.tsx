// @ts-ignore
import Modal from "react-modal";
import styles from "./DeleteRoutineModal.module.css";

Modal.setAppElement("#root");

interface DeleteRoutineModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  onDelete: (isConfirmed: boolean) => void;
}

export const DeleteRoutineModal = ({
  modalIsOpen,
  closeModal,
  onDelete,
}: DeleteRoutineModalProps) => {


  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <div>
        <h2 className={styles.title}>Supprimer la routine ?</h2>
        <p className={styles.message}>Cette action est irréversible.</p>
        <div className={styles.buttons}>
          <button
            className={styles.cancelButton}
            onClick={() => {
              closeModal();
              onDelete(false);
            }}
          >
            Annuler
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => {
              closeModal();
              onDelete(true);
            }}
          >
            Supprimer
          </button>
        </div>
      </div>
    </Modal>
  );
};
