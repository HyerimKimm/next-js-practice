import { NewsType } from "@/types/news";
import styles from "./NewsList.module.css";
import Link from "next/link";

export default function NewsList({ newsList }: { newsList: NewsType[] }) {
  if (newsList.length === 0) {
    return <ul className={styles.news_list}>No news for selected period.</ul>;
  }

  return (
    <ul className={styles.news_list}>
      {newsList.map((news) => (
        <li key={news.id} className={styles.news_item}>
          <Link href={`/news/${news.id}`}>
            <img
              src={`/images/news/${news.image}`}
              className={styles.news_img}
              alt={news.title}
            />
            <span>{news.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
