import React,{useState} from 'react';
// import '../../CSS/table.css'

const Appliance = ({id,items,setItems, item,addData,isSubmit,checkLength}) =>{
  const [wattsPerDay,setWattsPerDay] =useState([]);

  const removeHandler = ()=>{
    setItems(items.filter((el)=> el.id !== item.id))
    checkLength({itemsLength:items.length})
  }
  const qtyChangeHandler=(e)=>{
    e.preventDefault();
    const updatedItem = {...item}
    updatedItem.Qty = e.target.value
    setWattsPerDay([updatedItem.Qty*updatedItem.Power*updatedItem.Hours])
    addData({id:updatedItem.id, qty:updatedItem.Qty , wattsPerItem:updatedItem.Qty*updatedItem.Power*updatedItem.Hours,dailySunshine:1})      
    console.log('{updatedItem}',wattsPerDay)
  }

  return(
    <div>
    <table>
    <tbody>
      <tr>
        <th>{item.applianceName}</th>
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
        <th>{item.Power}</th>
        <th>{item.Hours}</th>
        <th>{wattsPerDay}</th>
        <th> <button onClick={removeHandler}>Remove</button></th>
      
      </tr>
      </tbody>
    </table>

     
    
    </div>
  );
}

export default Appliance;