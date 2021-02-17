import React from "react";
import styles from "./MainHeader.module.css";

const MainHeader = (props) => {
  return <header className={styles.mainHeader}>{props.children}</header>;
};

export default MainHeader;
