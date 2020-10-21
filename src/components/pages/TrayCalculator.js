import React,{useState} from 'react';
import Form from '../TrayCalculator/Form';
import CableList from '../TrayCalculator/cableList'
import CableTrayData from '../TrayCalculator/cableTrayData';
import{cableCalculationHandler} from '../Caculation/TrayCalculation';


function TrayCalculator() {
  const [inputT, setInputT] = useState({});
  const [items, setItems] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [trayData, setTrayData] = useState({});
  const [cableCalculatedData, setCableCalculatedData] = useState({});
  
  // console.log('trayData',trayData)
  
  let cableData = [...items];

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
 
  return (

    <div>
    <h1>Tray Calculator</h1>
    {isSubmit && 
      <CableList 
      items={items}
      setItems={setItems}
      addData={addDataHandler}
      removeData={removeDataHandler}
      trayData={trayData}
      setTrayData={setTrayData}
    
      />
  }
    
    <Form 
      items={items} 
      setItems={setItems}
      inputT={inputT} 
      setInputT={setInputT} 
      isSubmit ={isSubmit}
      setIsSubmit={setIsSubmit}
    />
    {isSubmit &&  
      <CableTrayData 
      trayData={trayData}
      setTrayData={setTrayData}
      cableCalculatedData={cableCalculatedData}
      />}
   

    </div>
  );
}

export default TrayCalculator;