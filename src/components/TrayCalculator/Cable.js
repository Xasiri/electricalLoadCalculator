import React from 'react';
import '../../CSS/table.css';

const Cable =({items,setItems, item,addData,checkLength})=>{

  let diameter = Math.sqrt(item.area*4/(Math.PI)).toFixed(2);
  const distanceBetweenCables = 10;

  const removeHandler = ()=>{
    setItems(items.filter((el)=> el.id !== item.id))
    checkLength({itemsLength:items.length})
  }
  const qtyChangeHandler=(e)=>{
    e.preventDefault();
    const updatedItem = {...item}
    updatedItem.Qty = e.target.value 
    updatedItem.diameter = diameter

    addData({qty:updatedItem.Qty, id:updatedItem.id, diameter:updatedItem.diameter}) 
    
  }  

  // console.log('items', items);

  return(
    <div>
    <table> 
    <tbody>       
      <tr>     
        <th>
         <input 
            onChange={qtyChangeHandler} 
            type="number" 
            id="quantity" 
            name="quantity" 
           
            min="0" 
            max="20"
            />
        </th>
        <th>{item.area}</th>
        <th>{diameter}</th>
        <th>{item.density}</th>
        <th> <button onClick={removeHandler}>Remove</button></th>
        </tr>
        </tbody>
      
    </table>
    </div>
  );

}

export default Cable;