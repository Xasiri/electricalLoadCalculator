import React, { useState } from "react";
import TrayValidation from "./TrayValidation";
import { cableCalculationHandler } from "../../containers/CableTray/calculation/TrayCalculation";
import {
  Button,
  Container,
  Col,
  Row,
  InputGroup,
  FormControl,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./paragraph.css";
import "../ShortCircuitCurrentCalculation/card.css";

const CableTrayData = ({ products }) => {
  const [trayData, setTrayData] = useState({
    width: "250",
    height: "100",
    weight: "25",
    run: "1",
    layers: "1",
  });
  const [isDataAvailable, setIsDataAvailable] = useState(false);

  let cableDataArray = [...products];

  const traySizeHandler = (e, field) => {
    const value = e.target.value;
    setTrayData({
      ...trayData,
      field: value,
    });
  };

  const validationStateHandler = () => {
    setIsDataAvailable(true);
  };

  let cableCalculatedData = cableCalculationHandler(cableDataArray);

  return (
    <>
      <>
        <Row className="mb-2">
          <Col md lg="6" md={7} lg="6">
            Size of Cable Tray(mm)
          </Col>
          <Col md={4} lg={3}>
            <InputGroup>
              <InputGroup.Prepend>
                <FormControl
                  onChange={(event) => traySizeHandler(event, "width")}
                  type="number"
                  id="quantity"
                  name="width"
                  min="0"
                  defaultValue="250"
                />
                <FormControl
                  onChange={(event) => traySizeHandler(event, "height")}
                  type="number"
                  id="quantity"
                  name="height"
                  min="0"
                  defaultValue="100"
                />
              </InputGroup.Prepend>
            </InputGroup>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={7} lg="6">
            Weight of Cable Tray
          </Col>
          <Col md={4} lg={3}>
            <InputGroup>
              <FormControl
                onChange={(event) => traySizeHandler(event, "weight")}
                type="number"
                id="quantity"
                name="weight"
                min="0"
                defaultValue="25"
              />
              <InputGroup.Prepend>
                <InputGroup.Text className="inputGroupWidth_CableTray">
                  Kg/mt
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col md={7} lg="6">
            No of Cable Tray Run
          </Col>
          <Col md={4} lg={3}>
            <InputGroup>
              <FormControl
                onChange={(event) => traySizeHandler(event, "run")}
                type="number"
                id="quantity"
                name="run"
                min="0"
                defaultValue="1"
              />
              <InputGroup.Prepend>
                <InputGroup.Text className="inputGroupWidth_CableTray">
                  runs
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={7} lg="6">
            No of layers of cables in Cable tray
          </Col>
          <Col md={4} lg={3}>
            <InputGroup>
              <FormControl
                onChange={(event) => traySizeHandler(event, "layers")}
                type="number"
                id="quantity"
                name="layers"
                min="0"
                defaultValue="1"
              />
              <InputGroup.Prepend>
                <InputGroup.Text className="inputGroupWidth_CableTray">
                  layers
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col> Check for Validation</Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => validationStateHandler()}>
              Check for validation
            </Button>
          </Col>
        </Row>
      </>
      {isDataAvailable && (
        <Card>
          <TrayValidation
            trayData={trayData}
            cableCalculatedData={cableCalculatedData}
          />
        </Card>
      )}
    </>
  );
};
export default CableTrayData;
