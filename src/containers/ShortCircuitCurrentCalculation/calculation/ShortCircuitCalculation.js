export const cableImpedence=(cable)=>{
  let totalCableResistance= cable.length* cable.resistance/cable.qty
  let totalCableReactance = cable.length*cable.reactance/cable.qty
  let totalCableImpedence = Math.sqrt(Math.pow(totalCableResistance,2)+ Math.pow(totalCableReactance,2))
  // console.log('calc',totalCableResistance,totalCableReactance,totalCableImpedence,cable)
  return totalCableImpedence
}


export const faultCurrentAtHTBreaker=(totalCableImpedence,system)=>{

  let uReactanceAtHTBreaker =system.BaseKVA/system.faultLevel
  let totalImpedenceUptoHTBreaker = totalCableImpedence + uReactanceAtHTBreaker
  let faultMVAatHTBreaker = system.BaseKVA/totalImpedenceUptoHTBreaker
  let faultCurrent = (faultMVAatHTBreaker/system.BaseKVA).toFixed(2)

  // console.log('faultCurrent',faultCurrent )
  return [faultCurrent,totalImpedenceUptoHTBreaker]

}
export const faultCurrentAtHTBreakerToPrimary=(totalCableImpedence,system,totalImpedenceUptoHTBreaker)=>{
  let uImpedenceAtPrimary = totalCableImpedence*system.BaseKVA/(Math.pow(system.BaseKV,2)) // values at tot cable resistance different in sheet
  // let totalImpedence = uImpedenceAtPrimary + totalCableImpedence
  // let totalImpedenceUptoPrimary = totalImpedence + totalImpedenceUptoHTBreaker
    let totalImpedenceUptoPrimary = uImpedenceAtPrimary + totalImpedenceUptoHTBreaker

  let faultMVAatPrimary = system.BaseKVA/totalImpedenceUptoPrimary                     //system.BaseKVA or BaseMVA
  let faultCurrentAtPrimary = (faultMVAatPrimary/system.BaseKV).toFixed(2)

  // console.log('Primary',uImpedenceAtPrimary,totalImpedenceUptoPrimary,faultMVAatPrimary,system.BaseKVA)
  return [faultCurrentAtPrimary,totalImpedenceUptoPrimary]
}

export const faultCurrentATSecondary=(system,transformer,totalImpedenceUptoPrimary) =>{
  let perecentageReactanceAtBaseKVA = system.BaseKVAtransformer*transformer.impedence/system.BaseKVAtransformer //system.BaseKVA=> Rated KVA
  let uReactanceOfTransformer = perecentageReactanceAtBaseKVA/100
  let pUImpedenceUptoSecondary = uReactanceOfTransformer + totalImpedenceUptoPrimary
  let faultMVAatSecondary = system.BaseKVAtransformer/pUImpedenceUptoSecondary           //baseKVA or base MVA
  let faultCurrentATSecondaryWinding = (faultMVAatSecondary/(1.732*system.BaseKVLT)).toFixed(2)

  // console.log('seconday',faultMVAatSecondary, faultCurrentATSecondaryWinding,system.BaseKVLT)
  return [faultCurrentATSecondaryWinding, pUImpedenceUptoSecondary]

}

export const faultLevelAtLtSide=(totalCableImpedence,system,pUImpedenceUptoSecondary) =>{
  let uImpedenceAtMainLT = totalCableImpedence*system.BaseKVA/(Math.pow(system.BaseKV, 2))
  let totalImpedenceUptoMainLTPanel = uImpedenceAtMainLT+pUImpedenceUptoSecondary
  let faultMVAatMainLTPanel = system.BaseKVAtransformer/totalImpedenceUptoMainLTPanel
  let faultCurrentAtMainLtPanel = (faultMVAatMainLTPanel/(1.732*system.BaseKVLT)).toFixed(2)

  // console.log('LtSIDE',system)

  return [faultCurrentAtMainLtPanel, totalImpedenceUptoMainLTPanel]
}

export const faultLevelAtSubPanel=(totalCableImpedence,system,totalImpedenceUptoMainLTPanel)=>{
  let uImpedenceAtSubPanel = totalCableImpedence*system.BaseKVAtransformer/(Math.pow(system.BaseKVLT, 2))
  let totalImpedenceUptoSubPanel = uImpedenceAtSubPanel+totalImpedenceUptoMainLTPanel
  let faultMVASubPanel = system.BaseKVAtransformer/totalImpedenceUptoSubPanel
  let faultCurrentAtSubPanel = (faultMVASubPanel/(1.732*system.BaseKVLT)).toFixed(2)


  // console.log('SubPanle',totalCableImpedence,totalImpedenceUptoSubPanel,system,faultMVASubPanel,faultCurrentAtSubPanel)
  // console.log('subPanel-system',system)
  return [faultCurrentAtSubPanel, totalImpedenceUptoSubPanel]
}

export const faultCurrentMotorControl=(system, totalCableImpedence,totalImpedenceUptoSubPanel)=>{
  let uImpedenceAtMotorControl = totalCableImpedence*system.BaseKVAtransformer/(Math.pow(system.BaseKVLT, 2))
  let totalImpedenceUptoMotorControl = uImpedenceAtMotorControl+totalImpedenceUptoSubPanel
  let faultMVAMotorControl = system.BaseKVAtransformer/totalImpedenceUptoMotorControl
  let faultCurrentAtMotorControl = (faultMVAMotorControl/(1.732*system.BaseKVLT)).toFixed(2)

  console.log('Motor',totalCableImpedence,totalImpedenceUptoSubPanel,uImpedenceAtMotorControl,faultMVAMotorControl,faultCurrentAtMotorControl ,system)
  return faultCurrentAtMotorControl
}

