import React from 'react'
import InputCell from './InputCell'
import './table.css'

const CableDetails = (props) => {
  console.log('CableDetais', props.cableData[0])
  return (
    <div>
    <table>
    <tbody>
    <th>{props.stage}</th>
    <tr>
      <td>No of runs of Cable </td>
      <td>
        <InputCell 
              id={props.id}
              type ="runsOfCable"
              value={props.cableData[0].value}
          />
      </td>
    </tr>
    <tr>
      <td>Length of Cable (Km)</td>
      <td><InputCell 
              id={props.id}
              type ="length"
              value={props.cableData[1].value}
      /></td>
    </tr>
    <tr>
      <td>Resistance of Cable (Ω/Km)</td>
      <td><InputCell
              id={props.id}
              type ="resistance"
              value={props.cableData[2].value}
      /></td>
    </tr>
    <tr>
      <td>Reactance of Cable (Ω/Km) </td>
      <td><InputCell
              id={props.id}
              type ="reactance"
              value={props.cableData[3].value}
      /></td>
    </tr>
    </tbody>
  </table>
      
    </div>
  )
}

export default CableDetails
