"use client";

import styles from "./Modal.module.css";
import { useRouter } from "next/navigation";

export default function ModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className={styles.modal_backdrop} onClick={router.back}>
      <div
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}
