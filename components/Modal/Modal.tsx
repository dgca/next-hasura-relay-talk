import type { ReactNode } from "react";
import styles from "./modal.module.css";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.shade}
        role="button"
        aria-label="Close modal"
        onClick={onClose}
      />
      <div className={styles.body}>{children}</div>
    </div>
  );
}
