import React from 'react'
import {useDispatch} from 'react-redux'
import {FormControl,InputGroup} from 'react-bootstrap'


const EditableCell = (props) => {
  
  const dispatch = useDispatch()
  return (
    <InputGroup className='w-50'>
      <FormControl 
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
      </InputGroup>
    
  );
}

export default EditableCell
