import styles from "./Modal.module.css";

function Modal({ isOpen, onClose, children, variant = "default" }) {
  if (!isOpen) {
    return null;
  }

  const containerClass =
    variant === "image"
      ? styles.modalContainerImage
      : styles.modalContainerDefault;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={containerClass} onClick={(e) => e.stopPropagation()}>
        {variant === "default" && (
          <button className={styles.modalCloseButton} onClick={onClose}>
            ×
          </button>
        )}

        {children}
      </div>
    </div>
  );
}

export default Modal;
