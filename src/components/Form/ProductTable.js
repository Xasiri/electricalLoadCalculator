import React from "react";
import { useDispatch } from "react-redux";
import ProductRow from "./ProductRow";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./productTable.module.css";

function ProductTable(props) {
  const dispatch = useDispatch();
  let filterText = props.filterText;
  let product = props.products.map(function (product) {
    if (product.name.indexOf(filterText) === -1) {
      return null;
    }
    return <ProductRow product={product} key={product.id} />;
  });

  return (
    <Container className={styles.ContainerHeader}>
      <Card className={styles.card}>
        <Row className="py-2">
          <Col lg={3} md={3}>
            Appliance
          </Col>
          <Col md={2} className={styles.columnHeader}>
            Quantity
          </Col>
          <Col md={2} className={styles.columnHeader}>
            Watts
          </Col>
          <Col md={2} className={styles.columnHeader}>
            Hours on per Day
          </Col>
          <Col md={2} className={styles.columnHeader}>
            Watts Hours per Day
          </Col>
        </Row>
        {product}
        <Row>
          <Col md={1}>
            <Button
              variant="outline-danger"
              className={styles.addAppliance}
              type="button"
              onClick={() =>
                dispatch({
                  type: "ADD_PRODUCT",
                  obj: {
                    hours: 1,
                    id: (
                      +new Date() + Math.floor(Math.random() * 999999)
                    ).toString(36),
                    name: "",
                    qty: 1,
                    watts: 1,
                  },
                })
              }
            >
              Add Appliance
            </Button>{" "}
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ProductTable;
