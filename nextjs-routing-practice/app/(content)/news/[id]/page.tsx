import { DUMMY_NEWS } from "@/dummy_news";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import Link from "next/link";

type NewsDetailPageParamsType = {
  id: string;
};

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<NewsDetailPageParamsType>;
}) {
  const newsId = (await params).id;

  const news = DUMMY_NEWS.find((news) => news.id === newsId);

  if (!news) {
    notFound();
  }

  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <Link href={`/news/${news.id}/image`}>
          <img
            src={`/images/news/${news?.image}`}
            alt={news?.title}
            className={styles.poster}
          />
        </Link>
        <h1>{news.title}</h1>
        <time dateTime={news?.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}
