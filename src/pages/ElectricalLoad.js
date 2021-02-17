import React from "react";
import Form from "../components/Form/Form";
import TotalPowerConsumption from "../containers/ElectricalLoad/TotalPowerConsumption";
import { Card } from "react-bootstrap";
import "./panel.css";

const ElectricalLoad = () => {
  return (
    <div>
      <Card>
        <Card.Title>Power Consumption Calculator</Card.Title>
      </Card>
      <Form />

      <TotalPowerConsumption />
    </div>
  );
};
export default ElectricalLoad;
