import React from 'react'
import { useDispatch} from 'react-redux'
import {FormControl} from 'react-bootstrap'


const InputCell = (props) => {
  const dispatch = useDispatch()


  return (
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
  )
}

export default InputCell
