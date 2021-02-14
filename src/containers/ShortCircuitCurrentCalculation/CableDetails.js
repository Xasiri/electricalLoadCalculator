import React from 'react'
import InputCell from './InputCell'
import {Card,Col,Row} from 'react-bootstrap'

const CableDetails = (props) => {
  console.log('CableDetais', props.cableData[0])
  return (
    <Card  >
    <Card.Body>
    
    <Row className='mb-2'><Card.Title>{props.stage}</Card.Title></Row>
    <Row className='mb-2'>
      <Col lg='7'>No of runs of Cable </Col>
      <Col>
        <InputCell 
              id={props.id}
              type ="runsOfCable"
              value={props.cableData[0].value}
          />
      </Col>
    </Row>
    <Row className='mb-2'>
      <Col lg='7'>Length of Cable (Km)</Col>
      <Col><InputCell 
              id={props.id}
              type ="length"
              value={props.cableData[1].value}
      /></Col>
    </Row>
    <Row className='mb-2'>
      <Col lg='7'>Resistance of Cable (Ω/Km)</Col>
      <Col><InputCell
              id={props.id}
              type ="resistance"
              value={props.cableData[2].value}
      /></Col>
    </Row>
    <Row className='mb-2'>
      <Col lg='7'>Reactance of Cable (Ω/Km) </Col>
      <Col><InputCell
              id={props.id}
              type ="reactance"
              value={props.cableData[3].value}
      /></Col>
    </Row>
    
  </Card.Body>
      
    </Card>
  )
}

export default CableDetails
