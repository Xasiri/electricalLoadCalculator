import React from "react";
import FormTray from "../components/FormCableTray/FormTray";
import { Card } from "react-bootstrap";

const CableTray = () => {
  return (
    <div>
      <Card>
        <Card.Title>Tray Calculator</Card.Title>
      </Card>
      <FormTray />
    </div>
  );
};

export default CableTray;
