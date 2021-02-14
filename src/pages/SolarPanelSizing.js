import React from "react";
import { Card } from "react-bootstrap";
import PanelMain from "../components/SolarPanel/PanelMain";

const SolarPanelSizing = () => {
  return (
    <div>
      <Card>
        <Card.Header as="h5">Solar Panel Sizing</Card.Header>
      </Card>
      <PanelMain />
    </div>
  );
};
export default SolarPanelSizing;
