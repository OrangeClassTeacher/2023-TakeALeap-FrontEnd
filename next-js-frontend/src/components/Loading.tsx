import React from "react";
import styles from "../styles/loading.module.css";

export const Loading = (): JSX.Element => (
  <div className={styles.center}>
    <div className={styles.ring} />
    <span className={styles.span}>loading...</span>
  </div>
);
