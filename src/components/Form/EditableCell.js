import React from 'react';
import { useDispatch } from 'react-redux';
import './inputList.css';

function EditableCell(props) {
  const dispatch = useDispatch();

  return (
    <input
      className="inputSolar"
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
