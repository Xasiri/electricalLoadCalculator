import React,{useState} from 'react';
import {Button,Container,Col,Row,InputGroup,FormControl} from 'react-bootstrap';
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

    const checkTrayData = (cableData,trayData) =>{
        if(cableData < trayData){

            WidthValid = true
            return true
        }else { WidthValid = false       
          return false
      }
    }
    let ok = <span style={greenStyle}>O.K</span>
    let notOk = <span style={redStyle}>Not O.K</span>
    let faultySelection = <span style={redStyle}>Faulty Selection</span>
   return( 
    <>
   
    <Row ><Col xs ='10' lg='7'>Calculated Cable Tray width :
    ({cableCalculatedData.cableWidth}mm) 
    {checkTrayData(cableCalculatedData.cableWidth,trayData.width)? ' < ': ' > ' } Actual Cable Tray width 
    ({trayData.width}mm) </Col>
    <Col lg='4' xs='10'>= {checkTrayData(cableCalculatedData.cableWidth,trayData.width)? ok: faultySelection }</Col>
</Row>
    
    <Row ><Col>Calculated depth of Cable Tray 
        ({CalculatedDepthofCableTray}mm) 
        {checkTrayData(CalculatedDepthofCableTray,trayData.height)? ' > ': ' < ' } Actual Depth of Cable Tray 
        ({trayData.height}mm)</Col><Col lg='5'> = {checkTrayData(CalculatedDepthofCableTray,trayData.height)? ok: faultySelection }</Col>
    </Row>

    <Row ><Col>Calculated Weight of all Cables 
        ({actualWeightofCables}Kg/m) 
        {actualWeightofCables >trayData.weight? ' > ': ' < '} Actual Weight of Cable Tray 
        ({trayData.weight} Kg/m)</Col><Col lg='5'> ={actualWeightofCables <trayData.weight? ok: faultySelection}</Col></Row>

    <Row ><Col>Remaining Cable Tray width Area </Col><Col lg='5'>= {remainingCableTrayWidth}%</Col></Row>

    <Row><Col>Remaining Cable Tray Area</Col><Col lg='5'> = {remainingCableTrayArea}%</Col></Row>

    <Row ><Col>Selection of {trayData.width}X{trayData.height} Cable Tray is :</Col>
    <Col lg='5'>
        {cableCalculatedData.cableWidth<trayData.width && 
          CalculatedDepthofCableTray < trayData.height && 
          actualWeightofCables <trayData.weight? ok : notOk }</Col></Row>
     
    </>
  )

}
export default TrayValidation;