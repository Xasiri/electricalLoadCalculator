import React from 'react'
import {KWHCalculation} from './calculation/ElectricalLoad/LoadCalculation'
import {useSelector} from 'react-redux'


const TotalKWh=()=>{
  const table = useSelector(state => state.table)
  let applianceData = [...table]
   let totalKWh =KWHCalculation(applianceData)

  return(

    <p>TotalKWh per Month : {totalKWh}</p>
  )
}

export default TotalKWh;