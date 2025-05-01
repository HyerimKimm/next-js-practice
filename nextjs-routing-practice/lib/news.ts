import { DUMMY_NEWS } from "@/dummy_news";

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears() {
  const result = DUMMY_NEWS.reduce((years: string[], news) => {
    const year = new Date(news.date).getFullYear();

    if (!years.includes(`${year}`)) {
      years.push(`${year}`);
    }

    return years;
  }, []);

  return result;
}

export function getAvailableNewsMonths(year: number): string[] {
  return DUMMY_NEWS.reduce((months: string[], news) => {
    const newsYear = new Date(news.date).getFullYear();
    const month = new Date(news.date).getMonth();

    if (newsYear === year && !months.includes(`${month}`)) {
      months.push(`${month + 1}`);
    }

    return months;
  }, []);
}

export function getNewsForYear(year: number) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();

    return newsYear === year;
  });
}

export function getNewsForMonth(year: number, month: number) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth();

    return newsYear === year && month === newsMonth + 1;
  });
}
