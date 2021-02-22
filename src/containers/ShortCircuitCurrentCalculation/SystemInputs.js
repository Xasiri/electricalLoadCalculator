import React from "react";
import { useSelector } from "react-redux";
import CableDetails from "./CableDetails";
// import { Container, Card } from "react-bootstrap";
import DetailsofElectricalSystem from "./DetailsofElectricalSystem";
import DetailsofHTandLT from "./DetailsofHTandLT";
import FaultCurrent from "./FaultCurrent";

const SystemInputs = () => {
  const filter = useSelector((state) => state.filter);
  const shortCircuitCable = useSelector((state) => state.shortCircuitCables);

  console.log("shortCircuitData", shortCircuitCable);

  let htCircuitBreaker =
    "Details of the cable, HT incoming Line to HT Circuit Breaker";
  let transformer = "Details of the cable, HT Circuit Breaker to Transformer";
  let lTPanel = "Details of the cable, Transformer Secondary to Main LT Panel";
  let subPanel = "Details of the cable, Main LT Panel to Sub Panel";
  let motorPanel = "Details of the cable, Sub Panel to Motor Control Panel";

  const deatailsOfElectricalSysytemId = 1;
  const detailsOfHTandLTId = 2;
  const htCircuitBreakerId = 3;
  const transformerId = 4;
  const lTPanelId = 5;
  const subPanelId = 6;
  const motorPanelId = 7;

  return (
    <>
      <DetailsofElectricalSystem
        cable={shortCircuitCable}
        id={deatailsOfElectricalSysytemId}
      />

      <DetailsofHTandLT cable={shortCircuitCable} id={detailsOfHTandLTId} />

      <CableDetails
        stage={htCircuitBreaker}
        id={htCircuitBreakerId}
        cableData={shortCircuitCable[2].property}
      />
      <CableDetails
        stage={transformer}
        id={transformerId}
        cableData={shortCircuitCable[3].property}
      />
      <CableDetails
        stage={lTPanel}
        id={lTPanelId}
        cableData={shortCircuitCable[4].property}
      />
      <CableDetails
        stage={subPanel}
        id={subPanelId}
        cableData={shortCircuitCable[5].property}
      />
      <CableDetails
        stage={motorPanel}
        id={motorPanelId}
        cableData={shortCircuitCable[6].property}
      />
      <FaultCurrent shortCircuitCable={shortCircuitCable} />
    </>
  );
};

export default SystemInputs;
