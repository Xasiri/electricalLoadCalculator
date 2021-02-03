import React from 'react'
import {useDispatch} from 'react-redux'

const EditableCell = (props) => {
  
  const dispatch = useDispatch()
  console.log('editable Cell', props.cellData.value)
  return (
    
      <input 
        type='text' 
        value={props.cellData.value} 
        name={props.cellData.name} 
        onChange ={(evt) => {
          dispatch({
          type: 'UPDATE_SOLAR',
          obj: {
            name: evt.target.name,
            value: evt.target.value
          }
        })
      }}/>
    
  );
}

export default EditableCell
