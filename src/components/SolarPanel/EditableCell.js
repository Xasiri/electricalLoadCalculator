import React from "react";
import { useDispatch } from "react-redux";
import { FormControl, InputGroup } from "react-bootstrap";
import "../../containers/ShortCircuitCurrentCalculation/card.css";

const EditableCell = (props) => {
  const dispatch = useDispatch();
  let classname = "inputGroupWidth_SolarPanelRest";
  if (props.append === "kWh/month") {
    classname = "inputGroupWidth_SolarPanelKwhmonth";
  }
  return (
    <InputGroup>
      <FormControl
        type="text"
        value={props.cellData.value}
        name={props.cellData.name}
        onChange={(evt) => {
          dispatch({
            type: "UPDATE_SOLAR",
            obj: {
              name: evt.target.name,
              value: evt.target.value,
            },
          });
        }}
      />
      {props.append && (
        <InputGroup.Prepend>
          <InputGroup.Text className={classname}>
            {props.append}
          </InputGroup.Text>
        </InputGroup.Prepend>
      )}
    </InputGroup>
  );
};

export default EditableCell;
