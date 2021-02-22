import { guageData } from "../../components/FormCableTray/CableGuageData";
import produce from "immer";

const initialState = [
  { id: "1", area: "1.5", core: "3", diameter: "14.13", density: "448" },
];

function cables(state = initialState, action) {
  switch (action.type) {
    case "ADD_CABLE": {
      console.log("Cables-reducer", action.obj);
      return state.concat([action.obj]);
    }
    case "DELETE_CABLE": {
      // let index = state.findIndex((p) => p.id === action.id);

      return [...state.filter((p) => p.id !== action.id)];
    }
    case "UPDATE_CABLE": {
      console.log("update cable", state);
      console.log("update cable", action);
      let cableIndex, itemID;

      return produce(state, (draftState) => {
        console.log("state", state);
        draftState.map((item) => {
          // return state.map((todo, index, arr) => {
          if (item.id.toString() === action.obj.id) {
            item[action.obj.name] = action.obj.value;

            guageData.map((cable, index) => {
              if (cable.core === item.core && cable.area === item.area) {
                cableIndex = index;
                itemID = action.obj.id;
                console.log(
                  "[CABLE DATA]",
                  cableIndex,
                  itemID,
                  cable.core,
                  cable.area
                );
                item.diameter = guageData[cableIndex].diameter;
                item.density = guageData[cableIndex].density;
              }
            });
          }
        });
      });
    }
    default:
      return state;
  }
}
export default cables;
