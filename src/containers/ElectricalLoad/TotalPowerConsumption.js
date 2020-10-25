import React from 'react'
import {Link} from 'react-router-dom';
import {
  TotalWattsHoursPerDayCalculation,
  TotalWattsCalculation,
  KWHCalculation
       } from './calculation/ElectricalLoad/LoadCalculation'
import {useSelector} from 'react-redux'


const TotalPowerConsumption=()=>{
  const table = useSelector(state => state.table)
  let applianceData = [...table]
  console.log('table',table)
   let totalWattsHoursPerDay =TotalWattsHoursPerDayCalculation(applianceData)
   let totalWatts =TotalWattsCalculation(applianceData)
   let totalKWh =KWHCalculation(applianceData)

  return(
    <div>
    <p>Total Watt Hours per Day : {totalWattsHoursPerDay}</p>
    <p>TotalWatts : {totalWatts}</p>
    <p>TotalKWh per Month : {totalKWh}</p>

    <Link to={{
      pathname:'/solar-panel-sizing', 
      state: {totalWattsHoursPerDay: totalWattsHoursPerDay, totalWatts:totalWatts} 
   }}      
      >
   <li>Solar Panel Sizing</li>
   </Link>
    </div>

  )
}

export default TotalPowerConsumption;