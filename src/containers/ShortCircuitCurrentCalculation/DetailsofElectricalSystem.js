import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import InputCell from "./InputCell";

const DetailsofElectricalSystem = (props) => {
  return (
    <>
      <Card.Body>
        <Row className="mb-2">
          <Card.Title>Details of Electrical System SLD</Card.Title>
        </Row>
        <Row className="mb-2">
          <Col md={8} lg="7">
            Main Incoming HT Supply Voltage{" "}
          </Col>
          <Col sm md={4} lg={3}>
            {" "}
            <InputCell
              id={props.id}
              value={props.cable[0].property[0].value}
              type="mainHTVolatage"
              append="KV"
            />
          </Col>{" "}
        </Row>
        <Row className="mb-2">
          {" "}
          <Col md={8} lg="7">
            Fault Level at HT Incoming Power Supply{" "}
          </Col>
          <Col md={4} lg={3}>
            <InputCell
              id={props.id}
              value={props.cable[0].property[1].value}
              type="fualtLevelHTSupply"
              append="MVA"
            />
          </Col>{" "}
        </Row>
        <Row className="mb-2">
          <Col md={8} lg="7">
            Transformer Rating{" "}
          </Col>
          <Col md={4} lg={3}>
            <InputCell
              id={props.id}
              value={props.cable[0].property[2].value}
              type="transformerMVA"
              append="MVA"
            />
          </Col>{" "}
        </Row>
        <Row className="mb-2">
          <Col md={8} lg="7">
            Transformer Impedance
          </Col>
          <Col md={4} lg={3}>
            <InputCell
              id={props.id}
              value={props.cable[0].property[3].value}
              type="transformerImpedence"
              append="%"
            />
          </Col>{" "}
        </Row>
      </Card.Body>
    </>
  );
};

export default DetailsofElectricalSystem;
