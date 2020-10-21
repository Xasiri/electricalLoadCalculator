import React from 'react';
import '../../CSS/para.css'

const Form = ({inputText, setInputText,items,setItems,setFormIsOpen}) =>{
  
  const applianceHandler = (e) =>{
    const value = e.target.value;
    setInputText({
      ...inputText,[e.target.name]:value
    })

  }
  const submitHandler =(e) =>{
    
    e.preventDefault();
    setItems([
      ...items,{
        applianceName:inputText.applianceName,
        Power:inputText.Power,
        Hours:inputText.Hours,
        id: Math.random()*1000}
      ])
    setInputText({
      applianceName:"",
      Power:"",
      Hours:""
    })
    setFormIsOpen(false)
  }
  return(
    <div>
    
    <form>
    <span className="firstlabel">
    <label>Appliance Name
      <input 
        onChange={applianceHandler} 
        name='applianceName' 
        value={inputText.applianceName}
        />
      </label>
      </span>
      <span className="firstlabel">
      <label>Power(W)
      <input className="inputPower"
        onChange={applianceHandler} 
        type="number"  
        name='Power' 
        value={inputText.Power}
        />
        </label>
        </span>
        <span className="firstlabel">
        <label>Hours Per Day
        <input 
        onChange={applianceHandler} 
        type="number"  
        name='Hours' 
        min="0" 
        max="24"
        value={inputText.Hours}
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