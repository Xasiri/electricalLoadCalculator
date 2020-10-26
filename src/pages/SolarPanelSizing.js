import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {
  capacityofPanelCalculation, 
  sizeofInverterCalculation, 
  stringofPanelCalculation,
  panelinEachStringCalculation,
} from '../containers/ElectricalLoad/calculation/SolarPanel/PanelSizingCalculation'
let sizeofPanel,noofPanelinEachString,numberofStringofPanel,KWh,totalLoad
let sizeofInverter ={watt:'' , VA: ''}

const SolarPanelSizing=()=>{
  // const [sizePanel,setSizePanel] = useState('');
  // const [noofPanelinEachString, setNoofPanelinEachString] = useState();
  // const [numberofStringofPanel, setNumberofStringofPanel] = useState();
  const [state, setState] = useState({
    voltageofPanel: '24',
    capacityofPanel: '250',
    hours: '6',
    systemVoltage:'48'    
  })
  const [KWhMonth,setKWhMonth] =useState('');

  const changeHandler=(e)=>{
    e.preventDefault()
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    console.log('changeHandler', state)
  }
  const powerChangeHandler=(e)=>{
    e.preventDefault()
    setKWhMonth(e.target.value)
    sizeofPanel = capacityofPanelCalculation(state.hours, e.target.value)
    sizeofInverter= sizeofInverterCalculation(e.target.value*1000/30);

    console.log('powerChangeHandler',sizeofPanel)

  }

  let consumptionData = useLocation()
  console.log('useLocation',consumptionData);
  
  if(consumptionData.state !== undefined){
    
      KWh =consumptionData.state.totalWattsHoursPerDay*30/1000
      totalLoad= consumptionData.state.totalWatts
      sizeofPanel = capacityofPanelCalculation(state.hours, KWh)
      sizeofInverter= sizeofInverterCalculation(totalLoad);


    console.log('undefined',consumptionData.state)
  }                                       
  let noofPanelinEachString = panelinEachStringCalculation(state.systemVoltage,state.voltageofPanel)
  let numberofStringofPanel = stringofPanelCalculation(sizeofPanel,state.capacityofPanel)
  console.log('calculation',sizeofPanel)

  return(
    <div>
    <h1>Solar Panel Sizing</h1>
    {consumptionData.state === undefined?   
      <span>
      <label>Enter Total KWh per Month : 
        <input 
        type="number" 
        name="KWh"  
        onChange={powerChangeHandler} 

        /><br></br>
      </label>
      </span>
    : <label>Total KWh per Month : {KWh} <br></br></label>
    }
    
   
    <label>Daily sunshine Hours :
    <input 
           
            type="number" 
            name="hours"  
            value={state.hours}         
            onChange={changeHandler}         
            />
            </label> <br></br>
    <p>Total size of panel(W) :{sizeofPanel} </p>
    <label>Size of Each Solar panel :
    <input 
        type="number"      
        name="capacityofPanel" 
        value={state.capacityofPanel}         
        onChange={changeHandler}  
        />
    </label><label> ,
    <input 
        
        type="number"       
        name="voltageofPanel" 
        value={state.voltageofPanel}         
        onChange={changeHandler}  
        />
        </label>

    <p>System Voltage :
    <input 
        type="number"       
        name="systemVoltage" 
        value={state.systemVoltage}         
        onChange={changeHandler}  
    />  
  </p>
     <p>No of String of Solar Panel = {noofPanelinEachString} No’s</p>
     <p>Total No of Solar Panel = {numberofStringofPanel} No’s</p>
     <p>Size of Inverter = {sizeofInverter.watt} watt or {sizeofInverter.VA} VA </p>
   
    </div>
  )
}
export default SolarPanelSizing;

 
  // const sunshineHoursHandler=(e)=>{
  //   e.preventDefault();
  //   hours = e.target.value;
  // }  
  // const wattHoursHandler=(e) =>{
  //   e.preventDefault();
  //   watts = e.target.value*1000/30
  // }

  // const submitCapacityHandler =(e) =>{
  //   e.preventDefault();
  //   capacityofPanel = e.target.value
  //   setNumberofStringofPanel(stringofPanelCalculation(sizeofPanel,capacityofPanel));
  // }
  // const submitVolatageHandler=(e)=>{
  //   e.preventDefault();
  //   voltageofPanel = e.target.value 
    
  // }
  // const solarSystemVoltageHandler=(e)=>{
  //   e.preventDefault();
  //   solarSystemVoltage = e.target.value; 
  //   setNumberofStringofPanel(stringofPanelCalculation(sizeofPanel,capacityofPanel));
  //   setNoofPanelinEachString(panelinEachStringCalculation(solarSystemVoltage,voltageofPanel));  
  //   console.log('panelString',sizeofPanel,capacityofPanel)
  // }