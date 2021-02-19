import React from "react";
import Form from "../components/Form/Form";
import TotalPowerConsumption from "../containers/ElectricalLoad/TotalPowerConsumption";
import { Container } from "react-bootstrap";
import "../App.css";
import "./panel.css";
import styles from "../mainStyles/body.module.css";
const ElectricalLoad = () => {
  return (
    <Container className="mainContainer">
      <Form />
      <TotalPowerConsumption />
    </Container>
  );
};
export default ElectricalLoad;
