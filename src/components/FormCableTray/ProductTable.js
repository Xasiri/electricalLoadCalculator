import React from "react";
import { useDispatch } from "react-redux";
import ProductRow from "./ProductRow";
import { Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Table.css";
import "../../containers/CableTray/paragraph.css"

function ProductTable(props) {
  const dispatch = useDispatch();
  let filterText = props.filterText;
  let product = props.products.map(function (product) {
    if (product.id.indexOf(filterText) === -1) {
      return <></>;
    }
    return <ProductRow product={product} key={product.id} />;
  });
  return (
    <>
      <>
        <Row className="font-weight-bold">
          <Col  lg={3} md={3}>
            Quantity
          </Col>
          <Col md={3}>Area(mm²)</Col>
          <Col md={3}>Core Count</Col>
        </Row>
      </>

      {product}
      <Row>
        <Col lg="3" md="3" className="my-2">
        <button 
          className="validateButton"
          type="button"
          onClick={() =>
            dispatch({
              type: "ADD_CABLE",
              obj: {
                id: (+new Date() + Math.floor(Math.random() * 999999)).toString(
                  36
                ),
                area: "1.5",
                core: "3",
              },
            })
          }
        >
          ADD CABLE
        </button>
        </Col>
      </Row>
    </>
  );
}

export default ProductTable;
