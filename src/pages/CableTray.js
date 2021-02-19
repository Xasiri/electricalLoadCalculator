import React from "react";
import FormTray from "../components/FormCableTray/FormTray";
import { Card } from "react-bootstrap";
import styles from "../mainStyles/body.module.css";

const CableTray = () => {
  return (
    <div className={styles.pageTop}>
      <FormTray />
    </div>
  );
};

export default CableTray;
