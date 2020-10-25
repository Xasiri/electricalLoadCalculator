import React,{useState, useEffect} from 'react';
import Form from '../TrayCalculator/Form';
import CableList from '../TrayCalculator/cableList'
import CableTrayData from '../TrayCalculator/cableTrayData';
import{cableCalculationHandler} from '../Caculation/TrayCalculation'; 


function TrayCalculator() {
  const [items, setItems] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [cableCalculatedData, setCableCalculatedData] = useState({});
  
  
  let cableData = [...items];
  console.log('trayCalculator-Main', cableData)


  const checkLengthHandler = length =>{
    if(length.itemsLength === 1){
      setIsSubmit(false);
    }
  }
 
  const removeDataHandler =(array) =>{
    setCableCalculatedData(cableCalculationHandler(array))
  }


  const addDataHandler=(item)=>{
 
   let cableDataIndex = cableData.findIndex(i => i.id === item.id);
    cableData[cableDataIndex].qty = item.qty;
    cableData[cableDataIndex].diameter=item.diameter;
    setCableCalculatedData(cableCalculationHandler(cableData))
  
    // console.log('add-data',widthofAllCables,numberofCables,totalCableOuterDiameter)
  }
  // useEffect(() =>{
  //   setCableCalculatedData(cableCalculationHandler(cableData))
  //   console.log('useEffect')
  // })
 
  return (

    <div>
    <h1>Tray Calculator</h1>
    {isSubmit && 
      <CableList 
      items={items}
      setItems={setItems}
      addData={addDataHandler}
      removeData={removeDataHandler}
     
      />
  }
    
    <Form 
      items={items} 
      setItems={setItems}
      isSubmit ={isSubmit}
      setIsSubmit={setIsSubmit}
    />
    {isSubmit &&  
      <CableTrayData 
      cableCalculatedData={cableCalculatedData}
      />}
   

    </div>
  );
}

export default TrayCalculator;