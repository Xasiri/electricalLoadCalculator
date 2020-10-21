import React,{useState,useEffect} from 'react';
import Form from '../SolarCalculator/Form';
import Appliances from '../SolarCalculator/appliances';
import TotalConsumption from '../SolarCalculator/totalConsumption';
import {PowerCalculation} from '../Caculation/SolarCalculation'

let i,j,l,m

function SolarLoadCalculator() {
  const [inputText, setInputText] = useState({applianceName:"",Power:"",Hours:""});
  const [items, setItems] = useState([]);
  const [totalWatts,setTotalWatts] =useState([]);
  const [kWhPerMonth, setkWhPerMonth]= useState([]);
  const [totalWattsHoursPerDay,setTotalWattsHoursPerDay]=useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);

  const openForm=()=>{
    setFormIsOpen(true)
  }

  let applianceData = [...items];
  const checkLengthHandler = length =>{
    if(length.itemsLength === 1){
      setIsSubmit(false);
    }
  }
   console.log('SolarLoad-applianceData', applianceData)

   const stateUpdate =(calculatedPower) =>{
    setTotalWatts(calculatedPower.totalWatts);
    setTotalWattsHoursPerDay(calculatedPower.totalWattsHoursPerDay);
    setkWhPerMonth(calculatedPower.kwh)
   }

   const removeDataHandler = (array) =>{
    let a = PowerCalculation(array)
    stateUpdate(a)
    console.log('removeDataHandler',a)
   }

  const addDataHandler = (item) =>{
    console.log('SolarLoad-item', item)
    setIsSubmit(true);
    
    let appliancDataIndex = applianceData.findIndex(i => i.id === item.id);
    applianceData[appliancDataIndex].wattsPerItem = item.wattsPerItem;
    applianceData[appliancDataIndex].qty = item.qty;
    i = applianceData.map(i => i.wattsPerItem).reduce((a,c) => a+c);
    let b= PowerCalculation(applianceData)
    stateUpdate(b)
           
        
  }
 


  return (
    <div>
    <h1>Load Calculator</h1>
    <Appliances 
      items={items} 
      setItems={setItems}
      addData={addDataHandler}
      removeData={removeDataHandler}
    
      isSubmit={isSubmit}
      checkLength={checkLengthHandler}
      />
     {formIsOpen && (
      <Form 
      inputText={inputText} 
      setInputText={setInputText} 
      items={items} 
      setItems={setItems} 
      setFormIsOpen={setFormIsOpen}     
    />
     )}
     <button onClick={openForm}>Add Appliance</button>
    
    {isSubmit && <TotalConsumption 
     
      totalWattsHoursPerDay={totalWattsHoursPerDay}
      totalWatts={totalWatts}
      kWhPerMonth = {kWhPerMonth}
      addData={addDataHandler}
      />
      
      }
    </div>
  );
}

export default SolarLoadCalculator;