import React,{useState} from 'react';
import '../../CSS/para.css'

const Form = ({items,setItems,setFormIsOpen,setIsSubmit}) =>{
  const [applianceName,setApplianceName] = useState('');
  const [appliancePower,setAppliancePower] = useState('1');
  const [applianceHours, setApplianceHours] = useState('1');

  const submitHandler =(e) =>{
    
    e.preventDefault();
    setItems([
      ...items,{
        applianceName:applianceName,
        Power:appliancePower,
        Hours:applianceHours,
        qty:"1",
        id: Math.random()*1000}
      ])
    
    setApplianceName('');
    setAppliancePower('1');
    setApplianceHours('1');
    
    setFormIsOpen(false)
    setIsSubmit(true)
  }
  return(
    <div>
    
    <form autocomplete="on">
    <span className="firstlabel">
    <label>Appliance Name
      <input 
        name='applianceName' 
        value={applianceName}
        onChange={event => {
          setApplianceName(event.target.value);
        }}
        />
      </label>
      </span>
      <span className="firstlabel">
      <label>Power(W)
      <input className="inputPower"
        type="number"  
        name='Power' 
        value={appliancePower}
        onChange={event => {
          setAppliancePower(event.target.value);
        }}
        />
        </label>
        </span>
        <span className="firstlabel">
        <label>Hours Per Day
        <input 
        type="number"  
        name='Hours' 
        min="0" 
        max="24"
        value={applianceHours}
        onChange={event => {
          setApplianceHours(event.target.value);
        }}
        />
        </label>
        </span>
      <button onClick={submitHandler} type="submit">Add</button>

      
    </form>
    <h4>{items.Power}</h4>

    </div>
  );
}

export default Form;