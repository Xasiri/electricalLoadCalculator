import React from 'react'
import {faultCurrentAtHTBreaker,
        cableImpedence,
        faultCurrentAtHTBreakerToPrimary,
        faultCurrentATSecondary,
        faultLevelAtLtSide,
        faultLevelAtSubPanel,
        faultCurrentMotorControl
      } from './calculation/ShortCircuitCalculation'
      import {Card ,Container} from "react-bootstrap";
import './card.css'
import CurrentValue from './CurrentValue';

const FaultCurrent = (props) => {
  let cableDetails = [...props.shortCircuitCable]

  console.log('cableDetails',cableDetails[0].property[1].value)
  let htCable= {length:cableDetails[2].property[1].value,
                 resistance:cableDetails[2].property[2].value,
                 qty:cableDetails[2].property[0].value,
                reactance:cableDetails[2].property[3].value
                }
          //  let [faultCurrent,totalImpedenceUptoHTBreaker] = cableImpedence()
  let htCableImpedence= cableImpedence(htCable)
  let system = {faultLevel:cableDetails[0].property[1].value,
                BaseKVA:cableDetails[1].property[0].value,
                BaseKV: cableDetails[1].property[1].value,
                BaseKVAtransformer:cableDetails[0].property[2].value,
                BaseKVLT: cableDetails[1].property[3].value
              }

  
  let [faultCurrentAtHTBreak,totalImpedenceUptoHTBreaker]= faultCurrentAtHTBreaker(htCableImpedence,system)

  let primaryCable={length:cableDetails[3].property[1].value,
                    resistance:cableDetails[3].property[2].value,
                    qty:cableDetails[3].property[0].value,
                    reactance:cableDetails[3].property[3].value
                    }
  let ltCable = {length:cableDetails[4].property[1].value,
                  resistance:cableDetails[4].property[2].value,
                  qty:cableDetails[4].property[0].value,
                reactance:cableDetails[4].property[3].value
                }
  let subPanelCable = {length:cableDetails[5].property[1].value,
                        resistance:cableDetails[5].property[2].value,
                        qty:cableDetails[5].property[0].value,
                      reactance:cableDetails[5].property[3].value
                      }
  let motorPanelCabel = {length:cableDetails[6].property[1].value,
                          resistance:cableDetails[6].property[2].value,
                          qty:cableDetails[6].property[0].value,
                        reactance:cableDetails[6].property[3].value
                        }

  let transformer = {impedence: cableDetails[0].property[3].value}
  let primaryCableImpedence= cableImpedence(primaryCable)
  let ltCableImpedence = cableImpedence(ltCable)
  let subPanelCableImpedence = cableImpedence(subPanelCable)
  let motorPanelCabelImpedence = cableImpedence(motorPanelCabel)
  console.log('MotorImpedence',motorPanelCabelImpedence,motorPanelCabel)
  let [faultCurrentAtHTBToPrimary, totalImpedenceUptoPrimary]= faultCurrentAtHTBreakerToPrimary(primaryCableImpedence,system,totalImpedenceUptoHTBreaker)
  
  let [faultCurrentATSecondaryWinding, pUImpedenceUptoSecondary]= faultCurrentATSecondary(system,transformer,totalImpedenceUptoPrimary)
  let [faultCurrentAtMainLtPanel, totalImpedenceUptoMainLTPanel]=faultLevelAtLtSide(ltCableImpedence,system,pUImpedenceUptoSecondary)
  let [faultCurrentAtSubPanel, totalImpedenceUptoSubPanel] = faultLevelAtSubPanel(subPanelCableImpedence,system,totalImpedenceUptoMainLTPanel)
  let faultCurrentAtMotorControl = faultCurrentMotorControl(system,motorPanelCabelImpedence,totalImpedenceUptoSubPanel)
  console.log('FaultCurrent',faultCurrentAtHTBreak,faultCurrentAtHTBToPrimary,faultCurrentATSecondaryWinding,faultCurrentAtMainLtPanel,faultCurrentAtSubPanel,faultCurrentAtMotorControl)
  return (
    <Container>
      <Card.Title className="font-weight-bold">Summary of Calculation</Card.Title>    
      
      
      <CurrentValue  
        faultCurrentatHTCircuitBreaker = {faultCurrentAtHTBreak}
        faultCurrentatPrimarysideofTransformer ={faultCurrentAtHTBToPrimary}
        faultCurrentatTransformerSecondaryWinding ={faultCurrentATSecondaryWinding}
        faultCurrentatMainLtPanel ={faultCurrentAtMainLtPanel}
        faultCurrentatSubPanel ={faultCurrentAtSubPanel}
        faultCurrentatMotorControlPanel ={faultCurrentAtMotorControl}

        />
      
      
    </Container>
  )
}

export default FaultCurrent
