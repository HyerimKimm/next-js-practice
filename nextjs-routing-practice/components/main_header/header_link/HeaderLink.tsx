"use client";

import Link from "next/link";

import styles from "./HeaderLink.module.css";
import { usePathname } from "next/navigation";

export default function HeaderLink() {
  const pathname = usePathname();

  return (
    <div className={styles.link_wrap}>
      <Link
        href="/news"
        className={`${styles.button} ${
          pathname === "/news" ? styles.selected : undefined
        }`}
      >
        news
      </Link>
      <Link
        href="/archive"
        className={`${styles.button} ${
          pathname === "/archive" ? styles.selected : undefined
        }`}
      >
        archive
      </Link>
    </div>
  );
}
