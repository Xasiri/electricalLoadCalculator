import React from 'react'
import InputCell from './InputCell'
import {Card,Col,Row} from 'react-bootstrap'
import './card.css'

const DetailsofHTandLT = (props) => {
  return ( 
    <Card className='card' >
    <Card.Body >
    <Row  className='mb-2'><Card.Title>HT and LT Side details</Card.Title></Row> 
     <Row className='mb-2'>
      <Col  lg='7'>Base KVA for HT side (H.T. Breaker and Transformer Primary) (MVA) </Col>
      <Col> <InputCell
              id={props.id}
              value={props.cable[1].property[0].value}
              type ="baseKVAhtSide"        
      /></Col></Row>
      <Row className='mb-2'>
        <Col lg='7'>Base KV for HT side (H.T. Breaker and Transformer Primary) (KV) </Col>
        <Col> <InputCell
              id={props.id}
              value={props.cable[1].property[1].value}
              type ="baseKVhtSide"           
        /></Col></Row>
      <Row className='mb-2'>
        <Col lg='7'>Base KVA for LT side (Transformer Secondary and down Stream) (MVA) </Col>
        <Col> <InputCell
              id={props.id}
              value={props.cable[1].property[2].value}
              type ="baseKVAltSide"   
        /></Col></Row>
      <Row>
        <Col lg='7'>Base KV for LT side (Transformer Secondary and down Stream) (V) </Col>
        <Col> <InputCell
              id={props.id}
              value={props.cable[1].property[3].value}
              type ="baseKVltSide"   
        /></Col>
      </Row>
      </Card.Body>
      
    </Card>
  )
}

export default DetailsofHTandLT
