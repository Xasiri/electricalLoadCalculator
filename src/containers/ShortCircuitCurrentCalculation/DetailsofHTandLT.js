import React from 'react'
import InputCell from './InputCell'

const DetailsofHTandLT = (props) => {
  return (
    <div>
    <table >
    <tr><th>HT and LT Side details</th></tr> 
     <tr>
      <td>Base KVA for HT side (H.T. Breaker and Transformer Primary) (MVA) </td>
      <td> <InputCell
              id={props.id}
              value={props.cable[1].property[0].value}
              type ="baseKVAhtSide"        
      /></td></tr>
      <tr>
        <td>Base KV for HT side (H.T. Breaker and Transformer Primary) (KV) </td>
        <td> <InputCell
              id={props.id}
              value={props.cable[1].property[1].value}
              type ="baseKVhtSide"           
        /></td></tr>
      <tr>
        <td>Base KVA for LT side (Transformer Secondary and down Stream) (MVA) </td>
        <td> <InputCell
              id={props.id}
              value={props.cable[1].property[2].value}
              type ="baseKVAltSide"   
        /></td></tr>
      <tr>
        <td>Base KV for LT side (Transformer Secondary and down Stream) (V) </td>
        <td> <InputCell
              id={props.id}
              value={props.cable[1].property[3].value}
              type ="baseKVltSide"   
        /></td>
      </tr>
      </table>
      
    </div>
  )
}

export default DetailsofHTandLT
