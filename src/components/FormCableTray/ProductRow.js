import React from 'react';
import { useDispatch } from 'react-redux';
import EditableCell from './EditableCell';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col ,FormControl,InputGroup,Card} from 'react-bootstrap';

import { cableArea, coreCount } from './CableGuageData';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './css/Input.css';

function ProductRow(props) {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch({ type: 'DELETE_CABLE', id: props.product.id });
  };

  const handleChange = (event) => {
    dispatch({
      type: 'UPDATE_CABLE',
      obj: {
        id: props.product.id,
        value: event.target.value,
        name: event.target.name,
      },
    });
  };

  return (
     <Row className="mb-2">
    <Col md={3}>
    <EditableCell
              cellData={{
              type: 'quantity',
              value: props.product.quantity,
              id: props.product.id,
            }}
          />
    </Col>
    <Col md={3}>
    <FormControl as="select"  onChange={handleChange} name="area">
                 {cableArea.map((area) => {
                return <option value={area}>{area}</option>;
              })}
           
            </FormControl>
    </Col>
    <Col md={3}>
    <FormControl as='select'  onChange={handleChange} name="core">
            
              {coreCount.map((core) => {
                return <option value={core}>{core}</option>;
              })}
           
          </FormControl>
    </Col>
    <Col md={3}>
    <button className="delete" onClick={deleteHandler}>
            <AiOutlineCloseCircle size="1.5em" color="orange" />
          </button>
    </Col>
    </Row>
    
   
  );
}

export default ProductRow;
