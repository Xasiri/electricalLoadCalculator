import React from 'react'
import { useDispatch} from 'react-redux'


const InputCell = (props) => {
  const dispatch = useDispatch()


  return (
    <input
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
