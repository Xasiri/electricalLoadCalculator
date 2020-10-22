import React,{useState} from 'react';

let WidthValid;

const TrayValidation =({trayData,cableCalculatedData}) =>{

  const a =10;
  let actualCableTrayArea = trayData.width*trayData.height

  let CalculatedDepthofCableTray = trayData.layers*trayData.run*cableCalculatedData.cableDepth
  let actualWeightofCables = trayData.layers*trayData.run*cableCalculatedData.cableWeight
  let remainingCableTrayWidth = ((1- cableCalculatedData.cableWidth/trayData.width)*100).toFixed(2)
  let remainingCableTrayArea = ((1 - cableCalculatedData.cableArea/actualCableTrayArea)*100).toFixed(2)

  // console.log('trayData',cableCalculatedData.cableWidth,trayData.width)
  // console.log('trayData',CalculatedDepthofCableTray,trayData.height)
  // console.log('trayData',actualWeightofCables,trayData.weight)

 
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
  
   return( 
    <div>
   
    <label >Calculated Cable Tray width :
    ({cableCalculatedData.cableWidth}mm) 
    {checkTrayData(cableCalculatedData.cableWidth,trayData.width)? ' < ': ' > ' } Actual Cable Tray width 
    ({trayData.width}mm) = {checkTrayData(cableCalculatedData.cableWidth,trayData.width)? 'O.K': ' Faulty Selection' }
</label><br></br>
    
    <label >Calculated depth of Cable Tray 
        ({CalculatedDepthofCableTray}mm) 
        {checkTrayData(CalculatedDepthofCableTray,trayData.height)? ' > ': ' < ' } Actual Depth of Cable Tray 
        ({trayData.height}mm) = {checkTrayData(CalculatedDepthofCableTray,trayData.height)? 'O.K': 'Faulty Selection' }
    </label><br></br>

    <label >Calculated Weight of all Cables 
        ({actualWeightofCables}Kg/Mt) 
        {actualWeightofCables >trayData.weight? ' > ': ' < '} Actual Weight of Cable Tray 
        ({trayData.weight} Kg/Mt) ={actualWeightofCables <trayData.weight? 'O.K': 'Faulty Selection'}</label><br></br>

    <label >Remaining Cable Tray width Area = {remainingCableTrayWidth}%</label><br></br>

    <label >Remaining Cable Tray Area = {remainingCableTrayArea}%</label><br></br>

    <label >Selection of 600X100 Cable Tray is 
        {cableCalculatedData.cableWidth<trayData.width && 
          CalculatedDepthofCableTray < trayData.height && 
          actualWeightofCables <trayData.weight? ' O.K' : ' Not O.K' }</label><br></br>
     
    </div>
  )

}
export default TrayValidation;