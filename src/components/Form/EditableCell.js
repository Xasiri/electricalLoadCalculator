import React from "react";
import { useDispatch } from "react-redux";
import { FormControl, InputGroup } from "react-bootstrap";
import styles from "./inputList.module.css";
import useWindowDimensions from "../../customHooks/getWindow";

function EditableCell(props) {
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  let outputWindow = (
    <FormControl
      type="text"
      id={props.cellData.id}
      value={props.cellData.value}
      name={props.cellData.type}
      onChange={(evt) => {
        dispatch({
          type: "UPDATE_PRODUCT",
          obj: {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value,
          },
        });
      }}
    />
  );

  if (width < 576) {
    outputWindow = (
      <InputGroup className={styles.editableCell}>
        <FormControl
          type="text"
          id={props.cellData.id}
          value={props.cellData.value}
          name={props.cellData.type}
          onChange={(evt) => {
            dispatch({
              type: "UPDATE_PRODUCT",
              obj: {
                id: evt.target.id,
                name: evt.target.name,
                value: evt.target.value,
              },
            });
          }}
        />
        <InputGroup.Prepend>
          <InputGroup.Text className={styles.editableCell__inputText}>
            {props.append}
          </InputGroup.Text>
        </InputGroup.Prepend>
      </InputGroup>
    );
  }
  console.log("height,width", height, width);

  return outputWindow;
}
export default EditableCell;
