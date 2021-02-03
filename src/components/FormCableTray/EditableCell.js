import React from 'react';
import {useDispatch} from 'react-redux'
import './css/Input.css'

function EditableCell(props) {
  const dispatch = useDispatch()

  return (
    <td>
      <input className="input__qty"
        type='text' 
        id={props.cellData.id} 
        value={props.cellData.value} 
        name={props.cellData.type} 
        onChange ={(evt) => {
          dispatch({
          type: 'UPDATE_CABLE',
          obj: {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
          }
        })
      }}/>
    </td>
  );

}
export default EditableCell;