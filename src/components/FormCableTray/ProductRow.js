import React from 'react';
import { useDispatch} from 'react-redux'
import EditableCell from './EditableCell';
import {areaCalculation} from '../../containers/CableTray/calculation/TrayCalculation'
import './css/editable.css'

function ProductRow(props) {

  const dispatch = useDispatch()
  console.log('delete table', props)

  const deleteHandler=() =>{
    dispatch({type: 'DELETE_CABLE', id: props.product.id})
  }

  return (
    <tr >
      <EditableCell className="name" cellData={{
        type: "quantity",
        value: props.product.qty,
        id: props.product.id
      }}/>
      <EditableCell className="power" cellData={{
        type: "area",
        value: areaCalculation(props.product.diameter),
        id: props.product.id
      }}/>
      <EditableCell className="power" cellData={{
        type: "diameter",
        value: props.product.diameter,
        id: props.product.id
      }}/>
      <EditableCell className="power" cellData={{
        type: "density",
        value: props.product.density,
        id: props.product.id
      }}/>
    
      <td >
           <button onClick={deleteHandler}>x</button>
      </td>
    </tr>
  );

}

export default ProductRow;