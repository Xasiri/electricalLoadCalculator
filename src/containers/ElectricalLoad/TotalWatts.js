import React from 'react'
import {TotalWattsCalculation} from './calculation/ElectricalLoad/LoadCalculation'
import {useSelector} from 'react-redux'


const TotalWatts=()=>{
  const table = useSelector(state => state.table)
  let applianceData = [...table]
   let totalWatts =TotalWattsCalculation(applianceData)

  return(

    <p>TotalWatts : {totalWatts}</p>
  )
}

export default TotalWatts;