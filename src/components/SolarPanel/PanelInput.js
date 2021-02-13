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
        <Col >Enter Total KWh per Month</Col>
        <Col><EditableCell cellData={{
          name: 'KWh',
          value: props.panelSizing.KWh
          }
        }  
          />
        </Col>
       </Row>        
       
       <Row className='mb-2'>
        <Col >Enter Total Electrical Load in Watt</Col>
        <Col><EditableCell cellData={{
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
    <Col >Total KWh per Month</Col>
    <Col>{props.panelSizing.KWh}</Col>
  </Row>
  <Row className='mb-2'>
    <Col>Total Electrical Load in Watt</Col>
    <Col>{props.panelSizing.totalLoad}</Col>
  </Row>

  </div>
    }
  
    <Row className='mb-2'>
      <Col>Future Load Expansion Factor </Col>
      <Col><EditableCell cellData={{
        name: 'inverterFutureLoadExpansionFactor',
        value: props.panelSizing.inverterFutureLoadExpansionFactor
        }
      }     
      /> </Col>
    </Row>
    <Row className='mb-2'>
      <Col>Inverter Efficiency </Col>
      <Col><EditableCell cellData={{
        name: 'inverterEfficiency',
        value: props.panelSizing.inverterEfficiency
        }
      }     
      /> </Col>
    </Row>
    <Row className='mb-2'>
    <Col>Inverter Power Factor </Col>
    <Col><EditableCell cellData={{
      name: 'inverterPowerFactor',
      value: props.panelSizing.inverterPowerFactor
      }
    }     
    /> </Col>
  </Row>

  <Row className='mb-2'>
    <Col>Daily sunshine Hours</Col>
    <Col><EditableCell cellData={{
      name: 'hours',
      value: props.panelSizing.hours
      }
    }     
    /></Col>
  </Row>
  <Row className='mb-2'>
        <Col>Size of Each Solar panel(W, V)</Col>
        <Col>
        <InputGroup className='w-50'>
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
      <Col>System Voltage (As per Battery Bank)</Col>  <Col> <EditableCell cellData={{
        name: 'systemVoltage',
        value: props.panelSizing.systemVoltage
        }
      }  
     
  />  </Col>
    </Row>
    <Row >
    <Col>Solar Panel Loose Wiring Connection Factor(%)</Col>
    <Col><EditableCell cellData={{
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
