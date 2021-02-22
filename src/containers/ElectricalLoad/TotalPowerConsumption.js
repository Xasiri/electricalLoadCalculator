import React from "react";
import { Link } from "react-router-dom";
import {
  TotalWattsHoursPerDayCalculation,
  TotalWattsCalculation,
  KWHCalculation,
} from "./calculation/ElectricalLoad/LoadCalculation";
import { useSelector } from "react-redux";
import "./powerConsumtion.css";
import { Row, Col } from "react-bootstrap";

const TotalPowerConsumption = () => {
  const table = useSelector((state) => state.table);
  let applianceData = [...table];
  let totalWattsHoursPerDay = TotalWattsHoursPerDayCalculation(applianceData);
  let totalWatts = TotalWattsCalculation(applianceData);
  let totalKWh = KWHCalculation(applianceData);

  return (
    <>
      <Row className="firstRow">
      <Col xs={{ span: 3, offset: 2 }}>
         
         </Col>
        <Col className="boxHeader"  xs={{ span: 3, offset: 3 }}>
          {" "}
          Total Watts-(Peak Load)
        </Col>
        <Col className="boxHeader" xs={{ span: 3, offset: 3 }}>
          Total Watt Hours per Day
        </Col>
      </Row>
      <Row className="secondRow">
        <Col xs={{ span: 3, offset: 2 }}>
         
        </Col>
        <Col className="box" xs={{ span: 3, offset: 3 }}>
          {totalWatts.toLocaleString()}
        </Col>
        <Col className="box_next " xs={{ span: 3, offset: 3 }}>
          {totalWattsHoursPerDay.toLocaleString()}
        </Col>
      </Row>
      <Row className="secondRow">
        <Col className="box_second_row" xs={{ span: 3, offset: 3 }}>
          Killowatt Hours per Month
        </Col>
        <Col className="box_second_row2" xs={{ span: 3, offset: 3 }}>
          {totalKWh}
        </Col>
      </Row>
      <Row>
        <Col className="sizingResults" xs={{ span: 3, offset: 8 }}>
        <Link
              to={{
              pathname: "/solar-panel-sizing",
              state: {
                totalWattsHoursPerDay: totalWattsHoursPerDay,
                totalWatts: totalWatts,
              },
            }}
          >
            <span>Solar Panel Sizing</span>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default TotalPowerConsumption;
