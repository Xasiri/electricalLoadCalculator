import React from 'react';
import '../../CSS/para.css'

const Form = ({inputT, setInputT,items,setItems,isSubmit,setIsSubmit}) =>{
  
  const cableHandler = (e) =>{
    const value = e.target.value;
    setInputT({
      ...inputT,[e.target.name]:value
    })
  }
  const submitHandler =(e) =>{
    
    e.preventDefault();
    setItems([
      ...items,{
        area:inputT.area,
        density: inputT.density,
        id: Math.random()*1000}
      ])
    setInputT({
      area:"",
      diameter:"",
      density:""
    })
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
        onChange={cableHandler} 
        type="number"  
        name='area' 
        value={inputT.area}
        />
        </label>
        </span>
       
        <span className="firstlabel">

        <label>Density(Kg/m) :
        <input className="inputF"
        onChange={cableHandler} 
        type="number"  
        name='density' 
        value={inputT.density}
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