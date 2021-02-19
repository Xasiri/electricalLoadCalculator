import React from "react";
import FormTray from "../components/FormCableTray/FormTray";
import { Container } from "react-bootstrap";
import styles from "../mainStyles/body.module.css";

const CableTray = () => {
  return (
    <Container className={styles.pageTop}>
      <FormTray />
    </Container>
  );
};

export default CableTray;
