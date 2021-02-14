import React from 'react';
import { useDispatch } from 'react-redux';
import {FormControl} from 'react-bootstrap'
import './inputList.css';

function EditableCell(props) {
  const dispatch = useDispatch();

  return (
    <FormControl className='form-control'
     
      type="text"
      id={props.cellData.id}
      value={props.cellData.value}
      name={props.cellData.type}
      onChange={(evt) => {
        dispatch({
          type: 'UPDATE_PRODUCT',
          obj: {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value,
          },
        });
      }}
    />
  );
}
export default EditableCell;
