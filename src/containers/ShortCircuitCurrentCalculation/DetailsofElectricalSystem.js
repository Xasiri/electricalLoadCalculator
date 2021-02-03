import React from 'react'
import InputCell from './InputCell'

const DetailsofElectricalSystem = (props) => {
  return (
    <div>
      <table>
      <tr><th>Details of Electrical System SLD</th></tr>
      <tr><td>Main Incoming HT Supply Voltage (KV)</td> 
        <td><InputCell 
              id={props.id} 
              value={props.cable[0].property[0].value}
              type ="mainHTVolatage"
        /></td> </tr>
      <tr> <td>Fault Level at HT Incoming Power Supply (MVA)</td> 
        <td><InputCell
              id={props.id}
              value={props.cable[0].property[1].value}

              type ="fualtLevelHTSupply"
        /></td> </tr>
      <tr><td>Transformer Rating (MVA)</td> 
        <td><InputCell
              id={props.id}
              value={props.cable[0].property[2].value}

              type ="transformerMVA"
        /></td> </tr>
      <tr><td>Transformer Impedance (%)</td> 
        <td><InputCell
              id={props.id}
              value={props.cable[0].property[3].value}

              type ="transformerImpedence"
        /></td> </tr>
      

      </table>
      
    </div>
  )
}

export default DetailsofElectricalSystem
