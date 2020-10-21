import React,{useState} from 'react';
import TrayValidation from './TrayValidation';
import '../../CSS/para.css'

const CableTrayData =({trayData,setTrayData,cableCalculatedData}) =>{
  const [isDataAvailable, setIsDataAvailable ] = useState(false);
  const traySizeHandler = (e) =>{
    const value = e.target.value;
    setTrayData({
      ...trayData,[e.target.name]:value
    })
  }
  const validationStateHandler=()=>{
    setIsDataAvailable(true)
  }

  return(
    <div>
    <label for="width">Size of Cable Tray(mm)=</label>
      <input className="inputTray"
              onChange={traySizeHandler}
              type="number" 
              id="quantity" 
              name="width" 
              min="0" 
              value={trayData.width}
              maxlength="4" size="4"

              />
    <label for="height">x</label>

      <input className="inputTray"
              onChange={traySizeHandler}
              type="number" 
              id="quantity" 
              name="height" 
              min="0" 
              value={trayData.height}
              /> <br></br>
    <label for="weight">Weight of Cable Tray(Kg/mt)</label>

      <input className="inputTray"
                      onChange={traySizeHandler}
                      type="number" 
                      id="quantity" 
                      name="weight" 
                      min="0" 
                      value={trayData.weight}
                      /> <br></br>
<label for="run">No of Cable Tray Run=

      <input className="inputF"
              onChange={traySizeHandler}
              type="number" 
              id="quantity" 
              name="run" 
              min="0" 
              value={trayData.run}

              /></label><br></br>
  <label for="run">No of layers of cables in Cable tray=
  <input className="inputF"
              onChange={traySizeHandler}
              type="number" 
              id="quantity" 
              name="layers" 
              min="0"
              value={trayData.layers}
              />
              </label>
<p>Check for Validation</p>
<button onClick={() =>validationStateHandler()}>Check for validation</button>
{isDataAvailable && 
  <TrayValidation
       trayData={trayData}
       cableCalculatedData={cableCalculatedData}  
  />}

     </div>
  )
}

export default CableTrayData;