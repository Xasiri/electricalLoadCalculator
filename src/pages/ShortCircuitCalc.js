import React from "react";
import { Card } from "react-bootstrap";
import SystemInputs from "../containers/ShortCircuitCurrentCalculation/SystemInputs";

const ShortCircuitCalc = () => {
  return (
    <div>
      <Card>
        {" "}
        <Card.Title>
          Short Circuit Current Calculation (Base KVA Method)
        </Card.Title>
      </Card>
      <SystemInputs />
    </div>
  );
};

export default ShortCircuitCalc;
