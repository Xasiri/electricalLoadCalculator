import React from "react";
import Form from "../components/Form/Form";
import TotalPowerConsumption from "../containers/ElectricalLoad/TotalPowerConsumption";
import { Container, Card } from "react-bootstrap";
import "../App.css";
import "./panel.css";
import styles from "../mainStyles/body.module.css";
import cardStyles from "../components/Form/productTable.module.css";
const ElectricalLoad = () => {
  return (
    <Container className={styles.pageTop}>
      <Form />
      <TotalPowerConsumption />
    </Container>
  );
};
export default ElectricalLoad;
