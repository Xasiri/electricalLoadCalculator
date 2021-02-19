import React from "react";
import { Card } from "react-bootstrap";
import SystemInputs from "../containers/ShortCircuitCurrentCalculation/SystemInputs";
import styles from "../mainStyles/body.module.css";

const ShortCircuitCalc = () => {
  return (
    <div className={styles.pageTop}>
      <SystemInputs />
    </div>
  );
};

export default ShortCircuitCalc;
