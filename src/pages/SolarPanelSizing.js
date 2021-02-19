import React from "react";
import { Container } from "react-bootstrap";
import PanelMain from "../components/SolarPanel/PanelMain";
import styles from "../mainStyles/body.module.css";

const SolarPanelSizing = () => {
  return (
    <Container className={styles.pageTop}>
      <PanelMain />
    </Container>
  );
};
export default SolarPanelSizing;
