import React from "react";
import EditableCell from "./EditableCell";
import { Col, Row, InputGroup, FormControl } from "react-bootstrap";

import "./tdWidth.css";

const PanelInput = (props) => {
  return (
    <div>
      {props.consumptionData.state === undefined ? (
        <>
          <Row className="mb-2 pt-2">
            <Col md={8} lg="5">
              Enter Total kWh per Month
            </Col>
            <Col md lg="3">
              <EditableCell
                cellData={{
                  name: "KWh",
                  value: props.panelSizing.KWh,
                }}
                append="kWh/month"
              />
            </Col>
          </Row>

          <Row className="mb-2">
            <Col md={8} lg="5">
              Enter Total Electrical Load in Watt
            </Col>
            <Col md={4} lg={3}>
              <EditableCell
                cellData={{
                  name: "totalLoad",
                  value: props.panelSizing.totalLoad,
                }}
                append="W"
              />
            </Col>
          </Row>
        </>
      ) : (
        <div>
          <Row className="mb-2">
            <Col md={8} lg="5">
              Total KWh per Month
            </Col>
            <Col md={4} lg={3}>
              <InputGroup>
                <FormControl value={props.panelSizing.KWh} />

                <InputGroup.Prepend>
                  <InputGroup.Text>kWh/month</InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md={8} lg="5">
              Total Electrical Load in Watt
            </Col>
            <Col md={4} lg={3}>
              <InputGroup>
                <FormControl value={props.panelSizing.totalLoad} />
                <InputGroup.Prepend>
                  <InputGroup.Text>W</InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup>
            </Col>
          </Row>
        </div>
      )}

      <Row className="mb-2">
        <Col md={8} lg="5">
          Future Load Expansion Factor{" "}
        </Col>
        <Col md={4} lg={3}>
          <EditableCell
            cellData={{
              name: "inverterFutureLoadExpansionFactor",
              value: props.panelSizing.inverterFutureLoadExpansionFactor,
            }}
          />{" "}
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={8} lg="5">
          Inverter Efficiency{" "}
        </Col>
        <Col md={4} lg={3}>
          <EditableCell
            cellData={{
              name: "inverterEfficiency",
              value: props.panelSizing.inverterEfficiency,
            }}
            append="%"
          />{" "}
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={8} lg="5">
          Inverter Power Factor{" "}
        </Col>
        <Col md={4} lg={3}>
          <EditableCell
            cellData={{
              name: "inverterPowerFactor",
              value: props.panelSizing.inverterPowerFactor,
            }}
          />{" "}
        </Col>
      </Row>

      <Row className="mb-2">
        <Col md={8} lg="5">
          Daily sunshine Hours
        </Col>
        <Col md={4} lg={3}>
          <EditableCell
            cellData={{
              name: "hours",
              value: props.panelSizing.hours,
            }}
            append="hrs"
          />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={8} lg="5">
          Size of Each Solar panel
        </Col>
        <Col md={4} lg={3}>
          <InputGroup>
            <InputGroup.Prepend>
              <EditableCell
                cellData={{
                  name: "capacityofPanel",
                  value: props.panelSizing.capacityofPanel,
                }}
                append="W"
              />

              <EditableCell
                cellData={{
                  name: "voltageofPanel",
                  value: props.panelSizing.voltageofPanel,
                }}
                append="V"
              />
            </InputGroup.Prepend>
          </InputGroup>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col md={8} lg="5">
          System Voltage (As per Battery Bank)
        </Col>{" "}
        <Col md={4} lg={3}>
          {" "}
          <EditableCell
            cellData={{
              name: "systemVoltage",
              value: props.panelSizing.systemVoltage,
            }}
            append="V"
          />{" "}
        </Col>
      </Row>
      <Row>
        <Col md={8} lg="5">
          Solar Panel Loose Wiring Connection Factor(%)
        </Col>
        <Col md={4} lg={3}>
          <EditableCell
            cellData={{
              name: "solarLooseWiringConnectionFactor",
              value: props.panelSizing.solarLooseWiringConnectionFactor,
            }}
            append="%"
          />{" "}
        </Col>
      </Row>
    </div>
  );
};

export default PanelInput;
