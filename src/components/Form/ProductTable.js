import React from 'react';
import {useDispatch} from 'react-redux'
import ProductRow from './ProductRow'
import './css/table.css'

function ProductTable(props) {

  const dispatch = useDispatch()
  console.log('props.products', props.products)
  let filterText = props.filterText;
  let product = props.products.map(function(product) {
    console.log('ProductTable',product)
    if (product.name.indexOf(filterText) === -1) {
      return;
    }
    return (<ProductRow product={product} key={product.id}/>)
  });
  return (
    <div>

      <button type="button" onClick={() => dispatch({
        type: 'ADD_PRODUCT',
        obj: {
          hours: 1,
          id: (+ new Date() + Math.floor(Math.random() * 999999)).toString(36),
          name: "name",
          qty: 1,
          watts: 1
        }
      })} >Add</button>
      <table >
        <thead>product
          <tr>
            <th>Appliance</th>
            <th>Quantity</th>
            <th>Watts</th>
            <th>Hours on per Day</th>
            <th>Watt Hours per Day</th>
          </tr>
        </thead>

        <tbody>
          {product}

        </tbody>

      </table>
    </div>
  );

}

export default ProductTable;