import React, { useState, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import EditableCell from './EditableCell';
import { applianceData } from './applianceData';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton, Dropdown, Container, Row, Col } from 'react-bootstrap';
import './inputList.css';

function ProductRow(props) {
  const [isClick, setIsClick] = useState(false);

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch({ type: 'DELETE_PRODUCT', id: props.product.id });
  };

  const onSelect = useCallback((selectedItem) => {
    setIsClick(false);
    dispatch({
      type: 'UPDATE_PRODUCT',
      obj: {
        id: props.product.id,
        value: selectedItem,
      },
    });
  }, []);

  const items = useMemo(
    () =>
      applianceData.map((oneItem) => ({
        // required: what to show to the user
        label: oneItem.name,
        // required: key to identify the item within the array
        id: oneItem.id,
      })),
    []
  );

  return (
    <Container>
      <Row className="rowMargin">
        <Col md={3.5}>
          <DropdownButton
            className="btn"
            title={props.product.name}
            id="dropdown-menu-align-right"
            onSelect={onSelect}
          >
            {' '}
            {applianceData.map((item) => {
              return (
                <Dropdown.Item eventKey={item.name}>{item.name}</Dropdown.Item>
              );
            })}
          </DropdownButton>
        </Col>
        <Col md={2} className="editableQty">
          <EditableCell
            cellData={{
              type: 'qty',
              value: props.product.qty,
              id: props.product.id,
            }}
          />
        </Col>
        <Col md={2}>
          <EditableCell
            className="power"
            cellData={{
              type: 'watts',
              value: props.product.watts,
              id: props.product.id,
            }}
          />
        </Col>
        <Col md={2}>
          <EditableCell
            className="power"
            cellData={{
              type: 'hours',
              value: props.product.hours,
              id: props.product.id,
            }}
          />
        </Col>
        <Col md={2}>
          <EditableCell
            className="power"
            cellData={{
              type: 'wattHoursPerDay',
              value:
                props.product.watts * props.product.qty * props.product.hours,
              id: props.product.id,
            }}
          />
        </Col>
        <Col md={0.5}>
          <button className="delete__Button" onClick={deleteHandler}>
            <AiOutlineCloseCircle size="1.5em" color="orange" />
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductRow;
