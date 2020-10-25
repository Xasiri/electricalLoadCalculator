import React,{useState,useEffect} from 'react';
import Form from '../SolarCalculator/Form';
import Appliances from '../SolarCalculator/appliances';
import TotalConsumption from '../SolarCalculator/totalConsumption';
import {PowerCalculation} from '../Caculation/SolarCalculation'

// let i,j,l,m

function SolarLoadCalculator({}) {
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
    if(length.itemsLength === 0){
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
   
    stateUpdate(PowerCalculation(array))
    console.log('SolarLoad-removeDataHandler',array)
   }

  const addDataHandler = (item) =>{ 
    console.log('SolarLoad-AddHandleritem', item)
    setIsSubmit(true);
    
    let appliancDataIndex = applianceData.findIndex(i => i.id === item.id);
    applianceData[appliancDataIndex].qty = item.qty;
    // i = applianceData.map(i => i.wattsPerItem).reduce((a,c) => a+c);
    stateUpdate(PowerCalculation(applianceData))    
         
  }
  useEffect(() =>{
    stateUpdate(PowerCalculation(applianceData))   
  },[applianceData])



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
     
      items={items} 
      setItems={setItems} 
      setFormIsOpen={setFormIsOpen} 
      setIsSubmit={setIsSubmit}    
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