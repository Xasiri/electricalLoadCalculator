import React from 'react'
import EditableCell from './EditableCell'
import './tdWidth.css'

const PanelInput = (props) => {
  return (
    <div>
    

    {props.consumptionData.state === undefined?   
      <span >
      <tr>
        <td >Enter Total KWh per Month</td>
        <td>: <EditableCell cellData={{
          name: 'KWh',
          value: props.panelSizing.KWh
          }
        }  
          />
        </td>
       </tr>        
       
       <tr>
        <td >Enter Total Electrical Load in Watt</td>
        <td>: <EditableCell cellData={{
          name: 'totalLoad',
          value: props.panelSizing.totalLoad
          }
        }  
          />
        </td>
       </tr>   
       </span>
    : 
    <div>
    <tr>
    <td >Total KWh per Month</td>
    <td>:  {props.panelSizing.KWh}</td>
  </tr>
  <tr>
    <td>Total Electrical Load in Watt</td>
    <td>: {props.panelSizing.totalLoad}</td>
  </tr>

  </div>
    }
  
    <tr>
      <td>Future Load Expansion Factor </td>
      <td>: <EditableCell cellData={{
        name: 'inverterFutureLoadExpansionFactor',
        value: props.panelSizing.inverterFutureLoadExpansionFactor
        }
      }     
      /> </td>
    </tr>
    <tr>
      <td>Inverter Efficiency </td>
      <td>: <EditableCell cellData={{
        name: 'inverterEfficiency',
        value: props.panelSizing.inverterEfficiency
        }
      }     
      /> </td>
    </tr>
    <tr>
    <td>Inverter Power Factor </td>
    <td>: <EditableCell cellData={{
      name: 'inverterPowerFactor',
      value: props.panelSizing.inverterPowerFactor
      }
    }     
    /> </td>
  </tr>

  <tr>
    <td>Daily sunshine Hours</td>
    <td>: <EditableCell cellData={{
      name: 'hours',
      value: props.panelSizing.hours
      }
    }     
    /></td>
  </tr>
  <tr>
        <td>Size of Each Solar panel(W, V)</td>
        <td><label>:<EditableCell cellData={{
          name: 'capacityofPanel',
          value: props.panelSizing.capacityofPanel
          }
        }  
        
        />
    </label><label> ,
    <EditableCell  cellData={{
      name: 'voltageofPanel',
      value: props.panelSizing.voltageofPanel
      }
    }          
        /></label></td>
      </tr>

      <tr>
      <td>System Voltage (As per Battery Bank)</td>
      <td>: <EditableCell cellData={{
        name: 'systemVoltage',
        value: props.panelSizing.systemVoltage
        }
      }  
     
  />  </td>
    </tr>
    <tr>
    <td>Solar Panel Loose Wiring Connection Factor(%)</td>
    <td>: <EditableCell cellData={{
      name: 'solarLooseWiringConnectionFactor',
      value: props.panelSizing.solarLooseWiringConnectionFactor
      }
    }  
   
/>  </td>
  </tr>
    </div>
  )
}

export default PanelInput
