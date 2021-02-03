import React from 'react'

const CurrentValue = (props) => {
 
  return (
    <div>
    <table>
  <tr>
    <th>Fault Location</th>
    <th>Fault Current(KA)</th>
    
  </tr>
  <tr>
    <td>At HT Circuit Breaker</td>
    <td>{props.faultCurrentatHTCircuitBreaker}</td>
   
  </tr>
  <tr>
    <td>At Primary Side of Transformer</td>
    <td>{props.faultCurrentatPrimarysideofTransformer}</td>
    
  </tr>
  <tr>
    <td>At Secondary Side of Transformer</td>
    <td>{props.faultCurrentatTransformerSecondaryWinding}</td>
    
  </tr>
  <tr>
    <td>At Main LT Panel</td>
    <td>{props.faultCurrentatMainLtPanel}</td>
    
  </tr>
  <tr>
    <td>At Sub Main Panel</td>
    <td>{props.faultCurrentatSubPanel}</td>
    
  </tr>
  <tr>
    <td>At Motor Control Panel</td>
    <td>{props.faultCurrentatMotorControlPanel}</td>
    
  </tr>
  
  
</table>
      
    </div>
  )
}

export default CurrentValue
