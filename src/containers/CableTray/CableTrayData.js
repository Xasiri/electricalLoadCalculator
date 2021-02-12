import React,{useState} from 'react'
import TrayValidation from './TrayValidation'
import {cableCalculationHandler} from '../../containers/CableTray/calculation/TrayCalculation'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import './paragraph.css'

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
    <div className="cableTrayData__main">   
              <tr> 
              <td className="td">Size of Cable Tray(mm)</td>
              <span className="cableTrayData__row">:  <input className="input"
              onChange={(event) =>traySizeHandler(event,"width")}
              type="number" 
              id="quantity" 
              name="width" 
              min="0" 
              defaultValue='250'

              />
            <label >x</label>

            <input className="input"
              onChange={(event) =>traySizeHandler(event,"height")}
              type="number" 
              id="quantity" 
              name="height" 
              min="0" 
              defaultValue='100'
              /></span>
              </tr>
              <tr>
              <td>Weight of Cable Tray(Kg/mt)</td>
              <span className="cableTrayData__row">:<input className="input"
              onChange={(event) =>traySizeHandler(event,"weight")}
              type="number" 
              id="quantity" 
              name="weight" 
              min="0" 
              defaultValue='25'
              /> </span>
              </tr>

              <tr>
              <td>No of Cable Tray Run</td>
              <span className="cableTrayData__row">: <input className="input"
              onChange={(event) =>traySizeHandler(event,"run")}
              type="number" 
              id="quantity" 
              name="run" 
              min="0" 
              defaultValue='1'

              /></span>
              </tr>
  
              <tr>
                <td>No of layers of cables in Cable tray</td>
                <span className="cableTrayData__row">: <input className="input"
                onChange={(event) =>traySizeHandler(event,"layers")}
                type="number" 
                id="quantity" 
                name="layers" 
                min="0"
                defaultValue='1'
                /></span>
              </tr>

<p className="p">Check for Validation</p>
<Button onClick={() =>validationStateHandler()}>Check for validation</Button>
{isDataAvailable && 
  <TrayValidation
       trayData={trayData}
       cableCalculatedData={cableCalculatedData}  
  />}

     </div>  )
}
export default CableTrayData