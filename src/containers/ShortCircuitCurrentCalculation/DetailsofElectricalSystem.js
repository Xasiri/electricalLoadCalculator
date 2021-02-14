import React from 'react'
import {Card,Col,Row,InputGroup} from 'react-bootstrap'
import InputCell from './InputCell'

const DetailsofElectricalSystem = (props) => {
  return (
    <Card  >
      <Card.Body>
      <Row className='mb-2'><Card.Title>Details of Electrical System SLD</Card.Title></Row>
      <Row className='mb-2'><Col lg='7'>Main Incoming HT Supply Voltage (KV)</Col> 
        <Col><InputCell 
              id={props.id} 
              value={props.cable[0].property[0].value}
              type ="mainHTVolatage"
        /></Col> </Row>
      <Row className='mb-2'> <Col lg='7'>Fault Level at HT Incoming Power Supply (MVA)</Col> 
        <Col><InputCell
              id={props.id}
              value={props.cable[0].property[1].value}

              type ="fualtLevelHTSupply"
        /></Col> </Row>
      <Row className='mb-2'><Col lg='7'>Transformer Rating (MVA)</Col> 
        <Col><InputCell
              id={props.id}
              value={props.cable[0].property[2].value}
              type ="transformerMVA"
        /></Col> </Row>
      <Row className='mb-2'><Col lg='7'>Transformer Impedance (%)</Col> 
        <Col><InputCell
              id={props.id}
              value={props.cable[0].property[3].value}

              type ="transformerImpedence"
        /></Col> </Row>
      

      </Card.Body>
      
    </Card>
  )
}

export default DetailsofElectricalSystem
