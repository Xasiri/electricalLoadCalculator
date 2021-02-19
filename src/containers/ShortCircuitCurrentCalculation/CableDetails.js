import React from "react";
import InputCell from "./InputCell";
import { Card, Col, Row } from "react-bootstrap";

const CableDetails = (props) => {
  console.log("CableDetais", props.cableData[0]);
  return (
    <>
      <Card.Body>
        <Row className="mb-2">
          <Card.Title>{props.stage}</Card.Title>
        </Row>
        <Row className="mb-2">
          <Col md={8} lg="7">
            No of runs of Cable{" "}
          </Col>
          <Col md={4} lg={3}>
            <InputCell
              id={props.id}
              type="runsOfCable"
              value={props.cableData[0].value}
              append="runs"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={8} lg="7">
            Length of Cable{" "}
          </Col>
          <Col md={4} lg={3}>
            <InputCell
              id={props.id}
              type="length"
              value={props.cableData[1].value}
              append="Km"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={8} lg="7">
            Resistance of Cable{" "}
          </Col>
          <Col md={4} lg={3}>
            <InputCell
              id={props.id}
              type="resistance"
              value={props.cableData[2].value}
              append="Ω/Km"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={8} lg="7">
            Reactance of Cable{" "}
          </Col>
          <Col md={4} lg={3}>
            <InputCell
              id={props.id}
              type="reactance"
              value={props.cableData[3].value}
              append="Ω/Km"
            />
          </Col>
        </Row>
      </Card.Body>
    </>
  );
};

export default CableDetails;
