import NewsList from "@/components/news_list/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForMonth,
  getNewsForYear,
} from "@/lib/news";
import styles from "./page.module.css";
import { NewsType } from "@/types/news";
import ArchiveFilterNav from "../filter_nav/ArchiveFilterNav";

export default async function YearFilteredArchivePage({
  params,
}: {
  params: {
    filter: string[];
  };
}) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  const yearLink = getAvailableNewsYears();
  const monthLink: string[] = selectedYear
    ? getAvailableNewsMonths(Number(selectedYear))
    : [];

  let newsList: React.ReactNode;

  if (!selectedYear && !selectedMonth) {
    newsList = <article>Please select period.</article>;
  } else if (selectedYear && !selectedMonth) {
    /* 연도만 선택된 경우 */
    newsList = <NewsList newsList={getNewsForYear(Number(filter[0]))} />;
  } else if (selectedYear && selectedMonth) {
    /* 연도와 월이 모두 선택된 경우 */
    newsList = (
      <NewsList
        newsList={getNewsForMonth(Number(filter[0]), Number(filter[1]))}
      />
    );
  }

  return (
    <>
      <header>
        <nav className={styles.nav_wrap}>
          <ArchiveFilterNav
            filterList={yearLink.map((year) => ({
              href: `${year}`,
              title: `${year}년`,
            }))}
            selectedFilter={selectedYear}
          />
          <ArchiveFilterNav
            filterList={monthLink.map((month) => ({
              href: `${selectedYear}/${month}`,
              title: `${month}월`,
            }))}
            selectedFilter={`${selectedYear}/${selectedMonth}`}
          />
        </nav>
      </header>
      {newsList}
    </>
  );
}
