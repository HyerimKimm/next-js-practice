import Link from "next/link";
import styles from "./ArchiveFilterNav.module.css";

export default function ArchiveFilterNav({
  filterList,
  selectedFilter,
}: {
  selectedFilter?: string;
  filterList: {
    title: string;
    href: string;
  }[];
}) {
  return (
    <ul className={styles.list_wrap}>
      {filterList.map((link) => {
        return (
          <li
            key={link.href}
            className={`${styles.list_item} ${
              !!selectedFilter && selectedFilter === link.href
                ? styles.selected
                : undefined
            }`}
          >
            <Link href={`/archive/${link.href}`}>{link.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
