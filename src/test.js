import _, { property } from "lodash";
import produce from "immer";
const dummyState = [
  {
    id: "1",
    property: [
      { name: "mainHTVolatage", value: "6.6" },
      { name: "fualtLevelHTSupply", value: "360" },
      { name: "transformerMVA", value: "2.5" },
      { name: "transformerImpedence", value: "6" },
    ],
  },
  {
    id: "2",
    property: [
      { name: "baseKVAhtSide", value: "6" },
      { name: "baseKVhtSide", value: "6.6" },
      { name: "baseKVAltSide", value: "2.5" },
      { name: "baseKVltSide", value: "0.415" },
    ],
  },
  {
    id: "3",
    property: [
      { name: "runsOfCable", value: "5" },
      { name: "length", value: "0.05" },
      { name: "resistance", value: "0.123" },
      { name: "reactance", value: "0.099" },
    ],
  },
  {
    id: "4",
    property: [
      { name: "runsOfCable", value: "3" },
      { name: "length", value: "0.4" },
      { name: "resistance", value: "0.123" },
      { name: "reactance", value: "0.099" },
    ],
  },
  {
    id: "5",
    property: [
      { name: "runsOfCable", value: "13" },
      { name: "length", value: "0.012" },
      { name: "resistance", value: "0.123" },
      { name: "reactance", value: "0.0618" },
    ],
  },
  {
    id: "6",
    property: [
      { name: "runsOfCable", value: "2" },
      { name: "length", value: "0.16" },
      { name: "resistance", value: "0.123" },
      { name: "reactance", value: "0.0618" },
    ],
  },
  {
    id: "7",
    property: [
      { name: "runsOfCable", value: "6" },
      { name: "length", value: "0.15" },
      { name: "resistance", value: "0.123" },
      { name: "reactance", value: "0.0739" },
    ],
  },
];

function shortCircuitCables(state = dummyState, action) {
  produce(state, (draftState) => {
    switch (action.type) {
      case "UPDATE_CABLEINPUT":
        draftState.forEach((index) => {
          console.log("draftState-ForEach", draftState[2].id);
          if (draftState[index].id === action.obj.id) {
            draftState.property.forEach((index) => {
              if (draftState.property[index].name === action.obj.name) {
                draftState.property[index].value = action.obj.value;
              }
            });
          }
        });
        break;
      default:
        break;
    }
  });
}
