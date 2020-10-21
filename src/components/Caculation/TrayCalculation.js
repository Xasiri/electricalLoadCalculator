export const diameterCalculation =(area) =>{                                            
  return Math.sqrt(area*4/(Math.PI)).toFixed(2);
  
}

export const cableCalculationHandler = (array)=>{
  let numberofCables = array.map(i => i.qty).reduce((a,c) => a+c);
  let totalCableOuterDiameter = array.map(i => i.diameter*i.qty).reduce((a,c) => a+c);
  let widthofAllCables = numberofCables*10 + totalCableOuterDiameter;
  let  finalWidthofAllCables= 1.2*widthofAllCables.toFixed(2);
  let weightofAllCables = array.map(i => i.qty*i.density).reduce((a,c) => a+c).toFixed(2);
  let maxHeightofCables = Math.max(...array.map(({diameter}) => diameter))
  let finalAreaofAllCables = (1.2*finalWidthofAllCables*maxHeightofCables).toFixed(2)
  let cableCalculatedData={ cableWidth:finalWidthofAllCables,cableDepth:maxHeightofCables,cableWeight:weightofAllCables,cableArea:finalAreaofAllCables}

   return cableCalculatedData
}