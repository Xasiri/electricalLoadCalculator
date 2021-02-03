import React from 'react';
import { useDispatch } from 'react-redux';
import ProductRow from './ProductRow';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tablE.css';

function ProductTable(props) {
  const dispatch = useDispatch();
  let filterText = props.filterText;
  let product = props.products.map(function (product) {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }
    return <ProductRow product={product} key={product.id} />;
  });
  return (
    <Container className="ContainerHeader">
      <Row>
        <Col lg={3} md={4}>
          Appliance
        </Col>
        <Col className="QtyHeader" md={2}>
          Quantity
        </Col>
        <Col md={2}>Watts</Col>
        <Col md={2}>Hours on per Day</Col>
        <Col md={2}>Watts Hours per Day</Col>
      </Row>
      <Row>{product}</Row>
      <Row>
        <Col md={1}>
          <Button
            variant="outline-danger"
            className="addAppliance"
            type="button"
            onClick={() =>
              dispatch({
                type: 'ADD_PRODUCT',
                obj: {
                  hours: 1,
                  id: (
                    +new Date() + Math.floor(Math.random() * 999999)
                  ).toString(36),
                  name: '',
                  qty: 1,
                  watts: 1,
                },
              })
            }
          >
            Add Appliance
          </Button>{' '}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductTable;
