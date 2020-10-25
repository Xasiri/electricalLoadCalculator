import React,{useState} from 'react';
import '../../CSS/para.css'

const Form = ({items,setItems,isSubmit,setIsSubmit}) =>{
   
  const [cableArea, setCableArea] =useState('12');
  const [cableDensity, setCableDensity] =useState('0.5');
 
  const submitHandler =(e) =>{
    
    e.preventDefault();
    setItems([
      ...items,{
        area:cableArea,
        density: cableDensity,
        id: Math.random()*1000}
      ])
    setCableArea('12');
    setCableDensity('0.5');
    setIsSubmit(true)
    
    // console.log('submitHandler',items)
  }
  return(
    <div>
    <p></p>
    <form> 
    <span className="firstlabel">
          <label>Area(Sq.mm) :
      <input className="inputF"
        type="number"  
        name='area' 
        value={cableArea}
        onChange={event => {
          setCableArea(event.target.value);
        }}
        />
        </label>
        </span>
       
        <span className="firstlabel">

        <label>Density(Kg/m) :
        <input className="inputF"
        type="number"  
        name='density' 
        value={cableDensity}
        onChange={event => {
          setCableDensity(event.target.value);
        }}
        maxlength="4" size="4"
        />
        </label>
        </span>
      <button onClick={submitHandler} type="submit">Add</button>

      
    </form>
    <p></p>
    </div>
  );
}

export default Form;