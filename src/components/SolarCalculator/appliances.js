import React,{useState} from 'react';
import Appliance from './appliance'
import '../../CSS/table.css'


const Appliances = ({items, setItems,addData, removeData,isSubmit,checkLength}) =>{
 const [wattsPerDay,setWattsPerDay] =useState([]);

 const removeHandler = (event,item)=>{
   event.preventDefault()
   setItems(items.filter((el)=> el.id !== item.id))
   checkLength({itemsLength:items.length})
   let arrayItem = items.filter((el)=> el.id !== item.id)
   removeData(arrayItem)
   console.log('appliances-items/remove',items)

 }

 const qtyChangeHandler=(event, item)=>{
   event.preventDefault();
   console.log('appliances-item',item)
   const updatedItem = {...item}
   updatedItem.Qty = event.target.value
   setWattsPerDay([updatedItem.Qty*updatedItem.Power*updatedItem.Hours])
   addData({id:updatedItem.id, qty:updatedItem.Qty , wattsPerItem:updatedItem.Qty*updatedItem.Power*updatedItem.Hours,dailySunshine:1})      
 }

   return(
     <div>
     <table>
     <thead>
       <tr>
         <th>Appliance</th>
         <th>Quantity</th>
         <th>Watts</th>
         <th>Hours on per Day</th>
         <th>Watt Hours per Day</th>
       
         </tr>
         </thead>

     {items.map(item=>( 
      <tr key={item.id} >
      <th>{item.applianceName}</th>
      <th>
       <input 
          onChange={(event) => qtyChangeHandler(event, item)} 
          type="number" 
          id="quantity" 
          name="quantity" 
         
          min="0" 
          max="20"
          />
      </th>
      <th>{item.Power}</th>
      <th>{item.Hours}</th>
      <th>{item.wattsPerItem}</th>
      <th> <button onClick={(event) =>removeHandler(event, item)}>Remove</button></th>
      
      </tr>
     ))}
      </table>
     </div>
  )
 
}
 


export default Appliances;