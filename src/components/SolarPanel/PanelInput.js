import React from 'react'
import EditableCell from './EditableCell'
import {Container,Col,Row,InputGroup} from 'react-bootstrap'

import './tdWidth.css'

const PanelInput = (props) => {
  return (
    <div>

    {props.consumptionData.state === undefined?   
      <> 
      <Row className='mb-2'>
        <Col md lg='6'>Enter Total KWh per Month</Col>
        <Col md lg='3'><EditableCell cellData={{
          name: 'KWh',
          value: props.panelSizing.KWh
          }
        }  
          />
        </Col>
       </Row>        
       
       <Row className='mb-2'>
        <Col  md lg='6'>Enter Total Electrical Load in Watt</Col>
        <Col md lg='3'><EditableCell cellData={{
          name: 'totalLoad',
          value: props.panelSizing.totalLoad
          }
        }  
          />
        </Col>
       </Row>   
       </>
    : 
    <div>
    <Row className='mb-2'>
    <Col md lg='6' >Total KWh per Month</Col>
    <Col md lg='3'>{props.panelSizing.KWh}</Col>
  </Row>
  <Row className='mb-2'>
    <Col md lg='6'>Total Electrical Load in Watt</Col>
    <Col md lg='3'>{props.panelSizing.totalLoad}</Col>
  </Row>

  </div>
    }
  
    <Row className='mb-2'>
      <Col md lg='6'>Future Load Expansion Factor </Col>
      <Col md lg='3'><EditableCell cellData={{
        name: 'inverterFutureLoadExpansionFactor',
        value: props.panelSizing.inverterFutureLoadExpansionFactor
        }
      }     
      /> </Col>
    </Row>
    <Row className='mb-2'>
      <Col md lg='6'>Inverter Efficiency </Col>
      <Col md lg='3'><EditableCell cellData={{
        name: 'inverterEfficiency',
        value: props.panelSizing.inverterEfficiency
        }
      }     
      /> </Col>
    </Row>
    <Row className='mb-2'>
    <Col md lg='6'>Inverter Power Factor </Col>
    <Col md lg='3'><EditableCell cellData={{
      name: 'inverterPowerFactor',
      value: props.panelSizing.inverterPowerFactor
      }
    }     
    /> </Col>
  </Row>

  <Row className='mb-2'>
    <Col md lg='6'>Daily sunshine Hours</Col>
    <Col md lg='3'><EditableCell cellData={{
      name: 'hours',
      value: props.panelSizing.hours
      }
    }     
    /></Col>
  </Row>
  <Row className='mb-2'>
        <Col md lg='6'>Size of Each Solar panel(W, V)</Col>
        <Col md lg='3'>
        <InputGroup >
                <InputGroup.Prepend>
        <EditableCell cellData={{
          name: 'capacityofPanel',
          value: props.panelSizing.capacityofPanel
          }
        }  
        
        />
     
    <EditableCell  cellData={{
      name: 'voltageofPanel',
      value: props.panelSizing.voltageofPanel
      }
    }          
        /></InputGroup.Prepend>
        </InputGroup>
        </Col>
      </Row> 
      

      
      
      
      <Row className='mb-2'>
      <Col md lg='6'>System Voltage (As per Battery Bank)</Col>  <Col md lg='3'> <EditableCell cellData={{
        name: 'systemVoltage',
        value: props.panelSizing.systemVoltage
        }
      }  
     
  />  </Col>
    </Row>
    <Row >
    <Col md lg='6'>Solar Panel Loose Wiring Connection Factor(%)</Col>
    <Col md lg='3'><EditableCell cellData={{
      name: 'solarLooseWiringConnectionFactor',
      value: props.panelSizing.solarLooseWiringConnectionFactor
      }
    }  
   
/>  </Col>
  </Row>
    </div>
  )
}

export default PanelInput
