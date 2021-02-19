import React from "react";
import InputCell from "./InputCell";
import { Card, Col, Row } from "react-bootstrap";
import "./card.css";

const DetailsofHTandLT = (props) => {
  return (
    <>
      <Card.Body>
        <Row className="mb-2">
          <Card.Title>HT and LT Side details</Card.Title>
        </Row>
        <Row className="mb-2">
          <Col md={8} lg="7">
            Base KVA for HT side (H.T. Breaker and Transformer Primary){" "}
          </Col>
          <Col md={4} lg={3}>
            {" "}
            <InputCell
              id={props.id}
              value={props.cable[1].property[0].value}
              type="baseKVAhtSide"
              append="MVA"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={8} lg="7">
            Base KV for HT side (H.T. Breaker and Transformer Primary){" "}
          </Col>
          <Col md={4} lg={3}>
            {" "}
            <InputCell
              id={props.id}
              value={props.cable[1].property[1].value}
              type="baseKVhtSide"
              append="KV"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={8} lg="7">
            Base KVA for LT side (Transformer Secondary and down Stream){" "}
          </Col>
          <Col md={4} lg={3}>
            {" "}
            <InputCell
              id={props.id}
              value={props.cable[1].property[2].value}
              type="baseKVAltSide"
              append="MVA"
            />
          </Col>
        </Row>
        <Row>
          <Col md={8} lg="7">
            Base KV for LT side (Transformer Secondary and down Stream){" "}
          </Col>
          <Col md={4} lg={3}>
            {" "}
            <InputCell
              id={props.id}
              value={props.cable[1].property[3].value}
              type="baseKVltSide"
              append="V"
            />
          </Col>
        </Row>
      </Card.Body>
    </>
  );
};

export default DetailsofHTandLT;
