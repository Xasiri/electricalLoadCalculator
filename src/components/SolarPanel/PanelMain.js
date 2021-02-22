import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import PanelInput from "./PanelInput";
import {
  capacityofPanelCalculation,
  sizeofInverterCalculation,
  stringofPanelCalculation,
  panelinEachStringCalculation,
  totalNoofPanel,
} from "../../containers/ElectricalLoad/calculation/SolarPanel/PanelSizingCalculation";
import './tdWidth.css'

const PanelMain = () => {
  // const filter = useSelector(state => state.filter)
  const dispatch = useDispatch();

  const panelSizing = useSelector((state) => state.panelSizing);

  let sizeofPanel, KWh, totalLoad;
  let sizeofInverter = { watt: "", VA: "" };

  let consumptionData = useLocation();
  console.log("PanelMain", panelSizing);

  if (consumptionData.state) {
    console.log("Consummp", consumptionData);
    KWh = (consumptionData.state.totalWattsHoursPerDay * 30) / 1000;
    totalLoad = consumptionData.state.totalWatts;
    dispatch({
      type: "UPDATE_SOLAR",
      obj: { name: "KWh", value: KWh },
    });
    dispatch({
      type: "UPDATE_SOLAR",
      obj: { name: "totalLoad", value: totalLoad },
    });

    // setTest('test');
    console.log("undefined", consumptionData.state);
  }
  sizeofPanel = capacityofPanelCalculation(
    panelSizing.hours,
    panelSizing.KWh,
    panelSizing.solarLooseWiringConnectionFactor
  );
  sizeofInverter = sizeofInverterCalculation(
    panelSizing.totalLoad,
    panelSizing.solarLooseWiringConnectionFactor,
    panelSizing.inverterEfficiency,
    panelSizing.inverterPowerFactor
  );

  let noofPanelinEachString = panelinEachStringCalculation(
    panelSizing.systemVoltage,
    panelSizing.voltageofPanel
  );
  let numberofStringofPanel = stringofPanelCalculation(
    sizeofPanel,
    panelSizing.capacityofPanel
  );
  let totalNoofSolarPanels = totalNoofPanel(
    noofPanelinEachString,
    numberofStringofPanel
  );

  return (
    <>
      <>
        <PanelInput
          panelSizing={panelSizing}
          consumptionData={consumptionData}
        />
      </>
      <div className="solarPanelSizingResults">
        <Row className="py-2 font-weight-bold">
          {" "}
          <Col xs="7" md={8} lg="6">Total size of panel(W)</Col>
          <Col>: {sizeofPanel}</Col>
        </Row>

        <Row className="py-2 font-weight-bold">
          <Col  xs="7"  md={8} lg="6">No of Panels in Each String </Col>
          {<Col>: {noofPanelinEachString} No’s</Col>}
        </Row>
        <Row className="py-2 font-weight-bold">
          <Col xs="7"  md={8} lg="6">No of String of Solar Panel </Col>
          {<Col>: {numberofStringofPanel} No’s</Col>}
        </Row>
        <Row className="py-2 font-weight-bold">
          {" "}
          <Col xs="7"  md={8} lg="6">Total No of Solar Panel </Col>
          {<Col>: {totalNoofSolarPanels} No’s</Col>}
        </Row>
        <Row className="py-2 font-weight-bold">
          <Col xs="7"  md={8} lg="6">Size of Inverter </Col>
          {
            <Col>
              : {sizeofInverter.watt} watt or {sizeofInverter.VA} VA
            </Col>
          }
        </Row>
      </div>
    </>
  );
};

export default PanelMain;
