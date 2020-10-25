export const diameterCalculation =(area) =>{                                            
  return Math.sqrt(area*4/(Math.PI)).toFixed(2);
  
}
export const areaCalculation =(diameter) =>{                                            
  return (Math.PI*Math.pow(diameter, 2)/4).toFixed(2);
}

export const cableCalculationHandler = (array)=>{
  let numberofCables = array.map(i => i.qty).reduce((a,c) => a+c,0);
  let totalCableOuterDiameter = array.map(i => i.diameter*i.qty).reduce((a,c) => a+c,0);
  let widthofAllCables = numberofCables*10 + totalCableOuterDiameter;
  let  finalWidthofAllCables= 1.2*widthofAllCables.toFixed(2);
  let weightofAllCables = array.map(i => i.qty*i.density).reduce((a,c) => a+c,0).toFixed(2);
  let maxHeightofCables = Math.max(...array.map(({diameter}) => diameter))
  let finalAreaofAllCables = (1.2*finalWidthofAllCables*maxHeightofCables).toFixed(2)
  let cableCalculatedData={ cableWidth:finalWidthofAllCables,cableDepth:maxHeightofCables,cableWeight:weightofAllCables,cableArea:finalAreaofAllCables}

  console.log('cableCalculationHandler-array', array)

  console.log('cableCalculationHandler', cableCalculatedData)
   return cableCalculatedData
}