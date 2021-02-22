import React from 'react'
import {Col,Row} from "react-bootstrap";

const CurrentValue = (props) => {
 
  return (
    <div>
   
  <Row className="font-weight-bold my-2">
    <Col md={8} lg="7">Fault Location</Col>
    <Col md={4} lg={3} className="text-center">Fault Current(KA)</Col>
    
  </Row>
  <Row className="font-weight-bold my-2">
    <Col md={8} lg="7">At HT Circuit Breaker</Col>
    <Col md={4} lg={3} className="text-center">{props.faultCurrentatHTCircuitBreaker}</Col>
   
  </Row>
  <Row className="font-weight-bold my-2">
    <Col md={8} lg="7">At Primary Side of Transformer</Col>
    <Col md={4} lg={3} className="text-center">{props.faultCurrentatPrimarysideofTransformer}</Col>
    
  </Row>
  <Row className="font-weight-bold my-2">
    <Col md={8} lg="7">At Secondary Side of Transformer</Col>
    <Col md={4} lg={3} className="text-center">{props.faultCurrentatTransformerSecondaryWinding}</Col>
    
  </Row>
  <Row className="font-weight-bold my-2">
    <Col md={8} lg="7" >At Main LT Panel</Col><Col md={4} lg={3} className="text-center">{props.faultCurrentatMainLtPanel}</Col>
    
  </Row>
  <Row className="font-weight-bold my-2">
    <Col md={8} lg="7">At Sub Main Panel</Col>
    <Col md={4} lg={3} className="text-center">{props.faultCurrentatSubPanel}</Col>
    
  </Row>
  <Row className="font-weight-bold my-2">
    <Col md={8} lg="7">At Motor Control Panel</Col>
    <Col md={4} lg={3} className="text-center">{props.faultCurrentatMotorControlPanel}</Col>
    
  </Row>
  
  
      
    </div>
  )
}

export default CurrentValue
