import Link from "next/link";
import Image from "next/image";
import classes from "./meal-item.module.css";

/*
meal-item.js file 은 JSX 구조와 살짝 다른 점이 있습니다. 
(extra <div> wrapper를 Image 밖에 감싸도록 작성되어 있는데,
프로젝트의 시각적인 결함을 fix하기 위한 wrapper입니다.)
*/
export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
