import { DUMMY_NEWS } from "@/dummy_news";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

export default async function ImagePage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const newsId = (await params).id;
  const news = DUMMY_NEWS.find((newsItem) => newsItem.id === newsId);

  if (!news) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
  );
}
