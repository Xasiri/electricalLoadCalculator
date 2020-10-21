export const PowerCalculation =(array) =>{                                            
  let totalWatts = array.map(i => i.qty*i.Power).reduce((a,c) => a+c,0)
  let totalWattsHoursPerDay =array.map(i => i.wattsPerItem).reduce((a,c) => a+c,0)
  let kwh =array.map(i => i.wattsPerItem).reduce((a,c) => a+c,0)*30/1000;
  let powerData = {totalWatts: totalWatts, totalWattsHoursPerDay:totalWattsHoursPerDay, kwh: kwh}
  return powerData;
  
}

export const capacityofPanelCalculation =(sunShineHours, totalWattsHoursPerDay) =>{
  let capacityPanel = Math.ceil(totalWattsHoursPerDay*1.2/sunShineHours);                //1.2= correction Factor
  return capacityPanel;
}

export const sizeofInverterCalculation = (totalElectricalLoad) =>{
  let sizeofInverter ={}
  sizeofInverter.watt= Math.ceil(totalElectricalLoad*1.2/0.8);
  sizeofInverter.VA = Math.ceil(totalElectricalLoad*1.2/(0.8*0.8));
  return sizeofInverter;
}


export const panelinEachStringCalculation =(solarSystemVoltage,voltageofPanel ) =>{
  let noofPanelinEachString = Math.ceil(solarSystemVoltage/voltageofPanel)
  console.log('stringofPanelCalculation',solarSystemVoltage,voltageofPanel,noofPanelinEachString)
  return noofPanelinEachString;
}
export const stringofPanelCalculation =(sizePanel, capacityofPanel ) =>{
  let numberofStringofPanel = Math.ceil(sizePanel/capacityofPanel);
  return numberofStringofPanel;
}


// export const stringofPanelCalculation =(sizePanel, capacityPanel,solarSystemVoltage,voltageofPanel ) =>{
//   let panelString= {}

//   panelString.numberofStringofPanel = Math.ceil(sizePanel/capacityPanel);
//   panelString.noofPanelinEachString = Math.ceil(solarSystemVoltage/voltageofPanel)
//   console.log('stringofPanelCalculation',sizePanel, capacityPanel,solarSystemVoltage,voltageofPanel,panelString)
//   return panelString;
// }