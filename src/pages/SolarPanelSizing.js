import React from "react";
import { Card } from "react-bootstrap";
import PanelMain from "../components/SolarPanel/PanelMain";
import styles from "../mainStyles/body.module.css";

const SolarPanelSizing = () => {
  return (
    <div className={styles.pageTop}>
      <PanelMain />
    </div>
  );
};
export default SolarPanelSizing;
