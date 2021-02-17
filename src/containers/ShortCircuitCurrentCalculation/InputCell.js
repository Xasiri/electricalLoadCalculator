import React from 'react'
import { useDispatch} from 'react-redux'
import {FormControl,InputGroup} from 'react-bootstrap'
import './card.css'


const InputCell = (props) => {
  const dispatch = useDispatch()


  return (
    <InputGroup>
    <FormControl
      // onChange={addHandler}
        id={props.id} 
        name={props.type} 
        value={props.value}
        onChange ={(evt) => {
          dispatch({
          type: 'UPDATE_CABLEINPUT',
          obj: {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
          }
        })
      }}
    
      />
       <InputGroup.Append>
      <InputGroup.Text className='inputGroupWidth'>{props.append}</InputGroup.Text>
    </InputGroup.Append>
    </InputGroup>
  )
}

export default InputCell
