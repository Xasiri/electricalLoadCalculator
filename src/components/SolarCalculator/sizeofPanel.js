import React,{useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {
  capacityofPanelCalculation, 
  sizeofInverterCalculation, 
  stringofPanelCalculation,
  panelinEachStringCalculation,
  
} from '../Caculation/SolarCalculation';

let solarSystemVoltage,capacityofPanel,voltageofPanel
let sizeofInverter,systemData ={}
let panelString ={}

const SizeofPanel=()=>{

  let data =useLocation();
  let watts= data.state.totalWattsHoursPerDay;
  let totalWatts = data.state.totalWatts;
  console.log(data.state.totalWattsHoursPerDay);

  const [dailySunshineHours, setDailySunshineHours] =useState([]);
  const [sizePanel,setSizePanel] = useState('');
  const [noofPanelinEachString, setNoofPanelinEachString] = useState();
  const [numberofStringofPanel, setNumberofStringofPanel] = useState();
  const [panelString,setPanelString] = useState({});

   const sunshineHoursHandler=(e)=>{
    e.preventDefault();
    
    setDailySunshineHours([e.target.value])
    let a = capacityofPanelCalculation(e.target.value, watts)
    setSizePanel(a);

  }  
  const submitCapacityHandler =(e) =>{
    e.preventDefault();
    capacityofPanel = e.target.value
    setNumberofStringofPanel(stringofPanelCalculation(sizePanel,capacityofPanel));

  }

  const submitVolatageHandler=(e)=>{
    e.preventDefault();
    voltageofPanel = e.target.value 
    
  }
  const solarSystemVoltageHandler=(e)=>{
    e.preventDefault();
    solarSystemVoltage = e.target.value; 
    setNumberofStringofPanel(stringofPanelCalculation(sizePanel,capacityofPanel));
    setNoofPanelinEachString(panelinEachStringCalculation(solarSystemVoltage,voltageofPanel));  
    console.log('panelString',sizePanel,capacityofPanel)
  }
  
  sizeofInverter= sizeofInverterCalculation(watts);


  return(
    <div>
    <label>Daily sunshine Hours :
    <input 
            onChange={sunshineHoursHandler} 
            placeholder="hours"
            type="number" 
            id="hours" 
            name="hours"            
            min="0" 
            max="24"
            />
            </label> <br></br>
    <p>Total size of panel {sizePanel} Watt</p>
    <label>Size of Each Solar panel :
    <input 
        onChange={submitCapacityHandler} 
        type="number" 
        id="quantity" 
        name="quantity" 
        placeholder="W"
        min="0" 
        max="48"
        />
    </label><label> ,
    <input 
        onChange={submitVolatageHandler} 
        type="number" 
        id="quantity" 
        name="quantity" 
        placeholder="V"
        min="0" 
        max="48"
        />
        </label>

    <p>System Voltage :
    <input 
    onChange={solarSystemVoltageHandler} 
    type="number" 
    id="quantity" 
    name="quantity" 
  
    min="0" 
    max="48"
    />
  
  </p>


     <p>No of String of Solar Panel = {noofPanelinEachString} No’s</p>
     <p>Total No of Solar Panel = {numberofStringofPanel} No’s</p>
     <p>Size of Inverter = {sizeofInverter.watt} watt or {sizeofInverter.VA} VA </p>
      
    </div>
  )
}

export default SizeofPanel;