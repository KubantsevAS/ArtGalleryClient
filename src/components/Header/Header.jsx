import React from "react";
import { Logo, themeIcon } from "../../common";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <div className={styles["header"]}>
      <Logo />
      {themeIcon}
    </div>
  );
}
