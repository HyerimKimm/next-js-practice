import Link from "next/link";

import styles from "./MainHeader.module.css";
import HeaderLink from "./header_link/HeaderLink";

export default function MainHeader() {
  return (
    <header className={styles.header_wrap}>
      <Link href="/" className={styles.button}>
        🏠
      </Link>
      <HeaderLink />
    </header>
  );
}
