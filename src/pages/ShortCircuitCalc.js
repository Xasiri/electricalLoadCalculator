import React from "react";
import { Container } from "react-bootstrap";
import SystemInputs from "../containers/ShortCircuitCurrentCalculation/SystemInputs";
import styles from "../mainStyles/body.module.css";

const ShortCircuitCalc = () => {
  return (
    <Container className={styles.pageTop}>
      <SystemInputs />
    </Container>
  );
};

export default ShortCircuitCalc;
