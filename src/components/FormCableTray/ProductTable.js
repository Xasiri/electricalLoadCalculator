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
    if (product.id.indexOf(filterText) === -1) {
      return;
    }
    return (<ProductRow product={product} key={product.id}/>)
  });
  return (
    <div>

      <button type="button" onClick={() => dispatch({
        type: 'ADD_CABLE',
        obj: {
          diameter: 1,
          id: (+ new Date() + Math.floor(Math.random() * 999999)).toString(36),
          qty: 1,
          density: 1
        }
      })} >Add</button>
      <table >
        <thead>Cable
          <tr>
            <th>Quantity</th>
            <th>Area(Sq.mm</th>
            <th>Diameter(mm)</th>
            <th>Density(Kg/m</th>
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