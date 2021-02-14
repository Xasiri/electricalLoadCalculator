import React from 'react'
import {Card} from 'react-bootstrap'
import SystemInputs from '../containers/ShortCircuitCurrentCalculation/SystemInputs'

const ShortCircuitCalc = () => {
  return (
    <div>
    <Card> <Card.Header as='h5'>Short Circuit Current Calculation (Base KVA Method)</Card.Header></Card>
    <SystemInputs/>
         
    </div> 
  )
}

export default ShortCircuitCalc
