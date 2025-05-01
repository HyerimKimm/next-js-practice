import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import logo from "@/assets/logo.jpg";

export default function Home() {
  return (
    <div className={styles.page}>
      <img src={logo.src} className={styles.logo} alt="A newspaper" />
      <h1>A News Site For The Next Generation</h1>
      <p className={`${styles.info} ${styles.subtitle}`}>
        Next News is here to deliver you all the latest news - concise &
        unbiased!
      </p>

      <p className={styles.info}>
        NextNews aims to provide you with the latest news in a concise and
        unbiased manner. We strive to deliver the news in a way that is easy to
        understand and to the point. We want to keep you informed without
        overwhelming you with unnecessary information.
      </p>

      <p className={styles.info}>
        We employ a team of dedicated journalists who are committed to
        delivering the news in a fair and unbiased manner. Our team is
        passionate about keeping you informed and up to date with the latest
        news.
      </p>

      <p className={styles.button_wrap}>
        <Link className={styles.link_button} href="/news">
          Read the latest news
        </Link>
      </p>
    </div>
  );
}
