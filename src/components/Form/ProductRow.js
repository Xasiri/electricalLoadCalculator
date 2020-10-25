import React from 'react';
import { useDispatch} from 'react-redux'
import EditableCell from './EditableCell';
import './css/editable.css'

function ProductRow(props) {

  const dispatch = useDispatch()
  console.log('delete table', props)

  const deleteHandler=() =>{
    dispatch({type: 'DELETE_PRODUCT', id: props.product.id})
  }

  return (
    <tr >
      <EditableCell className="name" cellData={{
        type: "name",
        value: props.product.name,
        id: props.product.id
      }}/>
      <EditableCell className="power" cellData={{
        type: "qty",
        value: props.product.qty,
        id: props.product.id
      }}/>
      <EditableCell className="power" cellData={{
        type: "watts",
        value: props.product.watts,
        id: props.product.id
      }}/>
      <EditableCell className="power" cellData={{
        type: "hours",
        value: props.product.hours,
        id: props.product.id
      }}/>
      <EditableCell className="power" cellData={{
        type: "wattHoursPerDay",
        value: props.product.watts*props.product.qty*props.product.hours,
        id: props.product.id
      }}/>
      <td >
           <button onClick={deleteHandler}>x</button>
      </td>
    </tr>
  );

}

export default ProductRow;