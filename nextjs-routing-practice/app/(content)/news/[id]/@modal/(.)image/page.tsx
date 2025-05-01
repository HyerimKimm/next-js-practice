import { DUMMY_NEWS } from "@/dummy_news";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import ModalLayout from "@/components/modal/Modal";

export default async function InterceptedImagePage({
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
    <ModalLayout>
      <img
        src={`/images/news/${news.image}`}
        alt={news.title}
        className={styles.img}
      />
    </ModalLayout>
  );
}
