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
  console.log('stringofPanelCalculation',sizePanel,capacityofPanel,numberofStringofPanel)

  return numberofStringofPanel;
}