import Link from "next/link";

import styles from "./page.module.css";
import { DUMMY_NEWS } from "@/dummy_news";
import NewsList from "@/components/news_list/NewsList";

export default function NewsPage() {
  return (
    <div className={styles.page}>
      <h1>News Page</h1>
      <NewsList newsList={DUMMY_NEWS} />
    </div>
  );
}
