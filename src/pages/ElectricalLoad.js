import React,{useState} from 'react';
import Form from '../components/Form/Form';
import TotalPowerConsumption from '../containers/ElectricalLoad/TotalPowerConsumption'

const ElectricalLoad=()=>{

  return(
    <div>
    <h1>Power Consumption Calculator</h1>
    <Form/>
   
    <TotalPowerConsumption/>
    
    </div>
  )
}
export default ElectricalLoad;