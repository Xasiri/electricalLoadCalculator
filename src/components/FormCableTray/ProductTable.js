import React from 'react';
import {useDispatch} from 'react-redux'
import ProductRow from './ProductRow'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/Table.css'

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
      <table >
        <thead>
          <tr>
            <th className="rest">Quantity</th>
            <th className="rest">area(mm²)</th>
            <th className="rest">Core count</th>
          </tr>
        </thead>
        <tbody>
          {product}
        </tbody>
      </table>
      <Button variant="outline-danger" className="buttonadd" type="button" onClick={() => dispatch({ 
        type: 'ADD_CABLE',
        obj: {          
          id: (+ new Date() + Math.floor(Math.random() * 999999)).toString(36),
          area: '1.5',
          core: '3'
        }
      })} >Add Cable</Button>
    </div>
  );

}

export default ProductTable;