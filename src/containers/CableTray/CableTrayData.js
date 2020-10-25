import React,{useState} from 'react'
import TrayValidation from './TrayValidation'
import {cableCalculationHandler} from '../../containers/CableTray/calculation/TrayCalculation'

const CableTrayData = ({products}) =>{
  const [trayData, setTrayData] = useState({
    width:'250',
    height:'100',
    weight:'25',
    run:'1',
    layers:'1'
  });
  const [isDataAvailable, setIsDataAvailable ] = useState(false);

  let cableDataArray = [...products]
  console.log('cables',products)

  const traySizeHandler = (e, field) =>{
    const value = e.target.value;
    setTrayData({
      ...trayData,field:value
    })
    console.log('traySizeHandler', value, [e.target.name])
  }

  const validationStateHandler=()=>{
    setIsDataAvailable(true)
  }


  let cableCalculatedData = cableCalculationHandler(cableDataArray)

  return(
    <div>
    <label for="width">Size of Cable Tray(mm)=</label>
      <input className="inputTray"
              onChange={(event) =>traySizeHandler(event,"width")}
              type="number" 
              id="quantity" 
              name="width" 
              min="0" 
              defaultValue='250'
              maxlength="4" size="4"

              />
    <label for="height">x</label>

      <input className="inputTray"
              onChange={(event) =>traySizeHandler(event,"height")}
              type="number" 
              id="quantity" 
              name="height" 
              min="0" 
              defaultValue='100'
              /> <br></br>
    <label for="weight">Weight of Cable Tray(Kg/mt)</label>

      <input className="inputTray"
                      onChange={(event) =>traySizeHandler(event,"weight")}
                      type="number" 
                      id="quantity" 
                      name="weight" 
                      min="0" 
                      defaultValue='25'
                      /> <br></br>
<label for="run">No of Cable Tray Run=

      <input className="inputF"
              onChange={(event) =>traySizeHandler(event,"run")}
              type="number" 
              id="quantity" 
              name="run" 
              min="0" 
              defaultValue='1'

              /></label><br></br>
  <label for="run">No of layers of cables in Cable tray=
  <input className="inputF"
              onChange={(event) =>traySizeHandler(event,"layers")}
              type="number" 
              id="quantity" 
              name="layers" 
              min="0"
              defaultValue='1'
              />
              </label>


<p>Check for Validation</p>
<button onClick={() =>validationStateHandler()}>Check for validation</button>
{isDataAvailable && 
  <TrayValidation
       trayData={trayData}
       cableCalculatedData={cableCalculatedData}  
  />}

     </div>  )
}
export default CableTrayData