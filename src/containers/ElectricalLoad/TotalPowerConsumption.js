import React from "react";
import { Link } from "react-router-dom";
import {
  TotalWattsHoursPerDayCalculation,
  TotalWattsCalculation,
  KWHCalculation,
} from "./calculation/ElectricalLoad/LoadCalculation";
import { useSelector } from "react-redux";
import "./powerConsumtion.css";
import { Row, Col,FormControl } from "react-bootstrap";

const TotalPowerConsumption = () => {
  const table = useSelector((state) => state.table);
  let applianceData = [...table];
  let totalWattsHoursPerDay = TotalWattsHoursPerDayCalculation(applianceData);
  let totalWatts = TotalWattsCalculation(applianceData);
  let totalKWh = KWHCalculation(applianceData);

  return (
    <>
     <Row className="mt-3">
     <Col className="pr-0 pl-10" md={{ span: 2, offset: 7 }} xs={4} align="center">
      <small> Total Watts-(Peak Load)</small>
     </Col>
     <Col  md={2} align="center" className="pr-0" xs={4}>
    <small> Total Watt Hours per Day</small>
     </Col>
     <Col  md={1}>
    
     </Col>
     </Row>
     <Row className="mb-3">
     <Col className=" pr-0 pl-10 font-weight-bolder" md={{ span: 2, offset: 7 }} xs={4} align="center">
      <FormControl className="marginL" value={totalWatts.toLocaleString()} />
     </Col>
     <Col  md={2} align="center" className="pr-0 font-weight-bolder" xs={4}>
    <FormControl className="marginL" value={totalWattsHoursPerDay.toLocaleString()} />
     </Col>
     <Col  md={1}>
    
     </Col>
     </Row>
     <Row className="mb-2">
     <Col className="pr-0 pl-10" md={{ span: 2, offset: 7 }} xs={4} align="center">
     Killowatt Hours per Month
     </Col>
     <Col  md={2} align="center" className="pr-0 font-weight-bolder" xs={4}>
         <FormControl className="marginL" value={totalKWh} />
     </Col>
     <Col  md={1}>
    
     </Col>
     </Row>
     <Row>
    
     <Col  md={{ span: 2, offset: 9 }} xs={{span:6,offset:2}} align="center" className="pr-0" >
     <Link
              className="powerConsumption__Link font-weight-bolder "
              to={{
                pathname: '/solar-panel-sizing',
                state: {
                  totalWattsHoursPerDay: totalWattsHoursPerDay,
                  totalWatts: totalWatts,
                },
              }}
            >
               <span><u>Solar Panel Sizing</u></span>
            </Link>
     </Col>
     <Col  md={1}>
    
     </Col>
     </Row>
    </>
  );
};

export default TotalPowerConsumption;
