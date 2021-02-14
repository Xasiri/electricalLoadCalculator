import React from 'react';
import { useDispatch } from 'react-redux';
import {FormControl} from 'react-bootstrap'
import styles from './inputList.module.css';

function EditableCell(props) {
  const dispatch = useDispatch();

  return (
    <FormControl className={styles.formControl}
     
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
