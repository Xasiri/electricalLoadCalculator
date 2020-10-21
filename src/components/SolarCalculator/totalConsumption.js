import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import SizeofPanel from './sizeofPanel';
import '../../CSS/para.css'

const TotalConsumption = ({totalWattsHoursPerDay, totalWatts, kWhPerMonth}) =>{
  console.log('TotalConsumption' , totalWatts)

   return(
     <div>
     <div >
     <p >Total Watts(peak Load) </p>
     <p >{totalWatts} </p>
     </div>
     <p >Total watts Hours per day </p>
     <p >{totalWattsHoursPerDay}</p>
     <p>Killowatt Hours Per Month: {kWhPerMonth}  kWh/mo</p>
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
export default TotalConsumption;