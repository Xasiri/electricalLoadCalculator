import React from 'react';
import { useDispatch } from 'react-redux';
import EditableCell from './EditableCell';
import 'bootstrap/dist/css/bootstrap.min.css';
import { cableArea, coreCount } from './CableGuageData';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './css/Input.css';

function ProductRow(props) {
  const dispatch = useDispatch();
  console.log('delete table', props);

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
    console.log('Handle', event.target.value, event.target.name);
  };

  return (
    <div className="cabletray__main">
      <span className="cabletray__row">
        <span>
          <EditableCell
            className="name"
            cellData={{
              type: 'quantity',
              value: props.product.quantity,
              id: props.product.id,
            }}
          />
        </span>
        <span>
          <form>
            <select className="select" onChange={handleChange} name="area">
              {cableArea.map((area) => {
                return <option value={area}>{area}</option>;
              })}
            </select>
          </form>
        </span>
        <span>
          <form>
            <select className="select" onChange={handleChange} name="core">
              {coreCount.map((core) => {
                return <option value={core}>{core}</option>;
              })}
            </select>
          </form>
        </span>

        <span>
          <button className="delete" onClick={deleteHandler}>
            <AiOutlineCloseCircle size="1.5em" color="orange" />
          </button>
        </span>
      </span>
    </div>
  );
}

export default ProductRow;
