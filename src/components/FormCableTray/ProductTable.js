import React from 'react';
import {useDispatch} from 'react-redux'
import ProductRow from './ProductRow'
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/Table.css'

function ProductTable(props) {

  const dispatch = useDispatch()
  let filterText = props.filterText;
  let product = props.products.map(function(product) {
    if (product.id.indexOf(filterText) === -1) {
      return;
    }
    return (<ProductRow product={product} key={product.id}/>)
  });
  return (
      
      <Container className="marginSet">
      <Row className="py-2">
        <Col lg={3} md={3}>
          Quantity
        </Col>
        <Col md={3}>
          Area(mm²)
        </Col>
        <Col md={3}>Core Count</Col>
        
      </Row>
     
       {product}
        <Row className="rowMarginSet">
        <Button variant="outline-danger" className="buttonadd" type="button" onClick={() => dispatch({ 
        type: 'ADD_CABLE',
        obj: {          
          id: (+ new Date() + Math.floor(Math.random() * 999999)).toString(36),
          area: '1.5',
          core: '3'
        }
      })} >Add Cable</Button>

        </Row>
     
      </Container> 
      
     
   
  );

}

export default ProductTable;