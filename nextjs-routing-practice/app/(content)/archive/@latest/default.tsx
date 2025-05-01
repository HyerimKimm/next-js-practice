import NewsList from "@/components/news_list/NewsList";
import { getLatestNews } from "@/lib/news";

export default function LatestPage() {
  const newsList = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList newsList={newsList} />
    </>
  );
}
