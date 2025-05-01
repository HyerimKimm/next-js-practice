import { CSSProperties } from "react";
import styles from "./Error.module.css";

type ErrorComponentPropsType = {
  code?: number;
  title: string;
  message: string;
  style?: CSSProperties;
};

export default function ErrorComponent({
  code,
  title,
  message,
  style,
}: ErrorComponentPropsType) {
  return (
    <div className={styles.error} style={style}>
      <h1>
        ⚠️ {code} {title}
      </h1>
      <p>{message}</p>
    </div>
  );
}
