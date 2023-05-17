import React from "react";
import styles from "../styles/loading.module.css";

export const Loading = (): JSX.Element => {
  return (
    <div className={styles.center}>
      <div className={styles.ring}></div>
      <span className={styles.span}>loading...</span>
    </div>
  );
};
