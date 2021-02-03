import React,{useState} from 'react';
import './paragraph.css'
import './label.css'

let WidthValid;
const greenStyle = {
  color:'green',
  fontweight: 'bold',
  marginleft: '20px'
}
const redStyle = {
  color:'red',
  fontweight: 'bold',
  marginleft: '5px'
}

const TrayValidation =({trayData,cableCalculatedData}) =>{

  const a =10;
  let actualCableTrayArea = trayData.width*trayData.height

  let CalculatedDepthofCableTray = trayData.layers*trayData.run*cableCalculatedData.cableDepth
  let actualWeightofCables = trayData.layers*trayData.run*cableCalculatedData.cableWeight
  let remainingCableTrayWidth = ((1- cableCalculatedData.cableWidth/trayData.width)*100).toFixed(2)
  let remainingCableTrayArea = ((1 - cableCalculatedData.cableArea/actualCableTrayArea)*100).toFixed(2)

  console.log('trayData',cableCalculatedData.cableWidth,trayData.width)
  console.log('trayData',CalculatedDepthofCableTray,trayData.height)
  console.log('trayData',actualWeightofCables,trayData.weight) 

 
    const checkTrayData = (cableData,trayData) =>{
        if(cableData < trayData){
            console.log('widthV', WidthValid)

            WidthValid = true
            return true
        }else { WidthValid = false       
          console.log('widthIn', WidthValid)
          return false
      }
    }
    let ok = <span style={greenStyle}>O.K</span>
    let notOk = <span style={redStyle}>Not O.K</span>
    let faultySelection = <span style={redStyle}>Faulty Selection</span>
   return( 
    <div>
   
    <label >Calculated Cable Tray width :
    ({cableCalculatedData.cableWidth}mm) 
    {checkTrayData(cableCalculatedData.cableWidth,trayData.width)? ' < ': ' > ' } Actual Cable Tray width 
    ({trayData.width}mm) = {checkTrayData(cableCalculatedData.cableWidth,trayData.width)? ok: faultySelection }
</label><br></br>
    
    <label >Calculated depth of Cable Tray 
        ({CalculatedDepthofCableTray}mm) 
        {checkTrayData(CalculatedDepthofCableTray,trayData.height)? ' > ': ' < ' } Actual Depth of Cable Tray 
        ({trayData.height}mm) = {checkTrayData(CalculatedDepthofCableTray,trayData.height)? ok: faultySelection }
    </label><br></br>

    <label >Calculated Weight of all Cables 
        ({actualWeightofCables}Kg/m) 
        {actualWeightofCables >trayData.weight? ' > ': ' < '} Actual Weight of Cable Tray 
        ({trayData.weight} Kg/m) ={actualWeightofCables <trayData.weight? ok: faultySelection}</label><br></br>

    <label >Remaining Cable Tray width Area = {remainingCableTrayWidth}%</label><br></br>

    <label >Remaining Cable Tray Area = {remainingCableTrayArea}%</label><br></br>

    <label >Selection of {trayData.width}X{trayData.height} Cable Tray is :
        {cableCalculatedData.cableWidth<trayData.width && 
          CalculatedDepthofCableTray < trayData.height && 
          actualWeightofCables <trayData.weight? ok : notOk }</label><br></br>
     
    </div>
  )

}
export default TrayValidation;