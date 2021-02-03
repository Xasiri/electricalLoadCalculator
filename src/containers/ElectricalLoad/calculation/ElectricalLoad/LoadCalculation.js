export const PowerCalculation =(array) =>{                                            
  let totalWatts = array.map(i => i.qty*i.watts).reduce((a,c) => a+c,0)
  let totalWattsHoursPerDay =array.map(i => i.watts*i.qty*i.hours).reduce((a,c) => a+c,0)
  let kwh =totalWattsHoursPerDay*30/1000;
  let powerData = {totalWatts: totalWatts, totalWattsHoursPerDay:totalWattsHoursPerDay, kwh: kwh}
  console.log('Calculation', powerData,array)
  return powerData;
}
export const TotalWattsHoursPerDayCalculation=(array) =>{
  let totalWattsHoursPerDay =array.map(i => i.watts*i.qty*i.hours).reduce((a,c) => a+c,0)
  return totalWattsHoursPerDay;
}
export const TotalWattsCalculation=(array) =>{
  let totalWatts = array.map(i => i.qty*i.watts).reduce((a,c) => a+c,0)
  return totalWatts;
}
export const KWHCalculation=(array) =>{
  let totalKWH = (array.map(i => i.watts*i.qty*i.hours).reduce((a,c) => a+c,0))*30/1000
  return totalKWH;
}


