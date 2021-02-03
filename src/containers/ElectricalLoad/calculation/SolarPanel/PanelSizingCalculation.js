export const capacityofPanelCalculation =(sunShineHours, KWhperMonth,correctionFactor) =>{
  let cf = 1+ correctionFactor/100
  let capacityPanel = Math.ceil(KWhperMonth*cf*1000/(sunShineHours*30));                //1.2= correction Factor
  console.log('capacityCalculation',sunShineHours, KWhperMonth)
  return capacityPanel;
}

export const sizeofInverterCalculation = (totalElectricalLoad,correctionFactor,efficiency, powerFactor) =>{
  let sizeofInverter ={}
  let CF = 1+ correctionFactor/100
  sizeofInverter.watt= Math.ceil(totalElectricalLoad*CF/(efficiency/100));
  sizeofInverter.VA = Math.ceil(totalElectricalLoad*CF/(powerFactor*efficiency/100));
  console.log('Inverter-Calculation', totalElectricalLoad)
  return sizeofInverter;
}


export const panelinEachStringCalculation =(solarSystemVoltage,voltageofPanel ) =>{
  let noofPanelinEachString = Math.ceil(solarSystemVoltage/voltageofPanel)
  console.log('stringofPanelCalculation',solarSystemVoltage,voltageofPanel,noofPanelinEachString)
  return noofPanelinEachString;
}
export const stringofPanelCalculation =(sizePanel, capacityofPanel ) =>{
  let numberofStringofPanel = Math.ceil(sizePanel/capacityofPanel);
  console.log('stringofPanelCalculation',sizePanel,10,numberofStringofPanel)

  return numberofStringofPanel;
}

export const totalNoofPanel =(noofPanelinEachString,numberofStringofPanel) =>{
  let totalPanels = noofPanelinEachString*numberofStringofPanel
  return totalPanels;
}