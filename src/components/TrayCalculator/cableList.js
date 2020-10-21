import React,{useState} from 'react';
import {diameterCalculation} from '../Caculation/TrayCalculation'
import '../../CSS/table.css';

const CableList = ({items, setItems,addData,removeData}) =>{

  const removeHandler = (item)=>{

    setItems(items.filter((el)=> el.id !== item.id))
    removeData(items.filter((el)=> el.id !== item.id))
  }
  
  const qtyChangeHandler=(e,item)=>{
    e.preventDefault();

    const updatedItem = {...item}
    updatedItem.Qty = e.target.value 
    updatedItem.diameter=diameterCalculation(updatedItem.area)
    // console.log('Udia ',updatedItem.diameter)
    addData({qty:updatedItem.Qty, id:updatedItem.id, diameter:updatedItem.diameter}) 
    
    
  }  
  

  // console.log('items', items);


   return(
     <div>
     <table>
    <thead>
      <tr>
        <th>Quantity</th>
        <th>Area(Sq.mm)</th>
        <th>Diameter(mm)</th>
        <th>Density(Kg/m)</th>
      
        </tr>
        </thead>
        {items.map(item=>( 
          <tr key={item.id} >
         <th>
         <input 
            onChange={(e)=>qtyChangeHandler(e,item)} 
            type="number" 
            id="quantity" 
            name="quantity" 
           
            min="0" 
            max="20"
            />
        </th>
        <th>{item.area}</th>
        <th>{diameterCalculation(item.area)}</th>
        <th>{item.density}</th>
        <th> <button onClick={() =>removeHandler(item)}>Remove</button></th>
        </tr>
        
        ))}
        </table>
        <p></p>

  
   
     </div>
  )
 
}
 


export default CableList;
