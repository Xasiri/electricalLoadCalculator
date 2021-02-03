import produce from 'immer';

const initialState = {
  KWh: '',
  totalLoad: '',
  voltageofPanel: '24',
  capacityofPanel: '250',
  hours: '6',
  systemVoltage: '48',
  solarLooseWiringConnectionFactor: '20',
  inverterFutureLoadExpansionFactor: '10',
  inverterEfficiency: '80',
  inverterPowerFactor: '0.8',
};

function PanelSizing(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_SOLAR': {
      console.log('update Solar-state', state);
      console.log('update Solar-action', action.obj);

      return produce(state, (draftState) => {
        console.log('Produce state', state);
        switch (action.obj.name) {
          case 'KWh':
            draftState.KWh = action.obj.value;

            break;
          case 'totalLoad':
            draftState.totalLoad = action.obj.value;

            break;
          case 'voltageofPanel':
            draftState.voltageofPanel = action.obj.value;

            break;
          case 'voltageofPanel':
            draftState.voltageofPanel = action.obj.value;

            break;
          case 'capacityofPanel':
            draftState.capacityofPanel = action.obj.value;

            break;
          case 'hours':
            draftState.hours = action.obj.value;

            break;
          case 'systemVoltage':
            draftState.systemVoltage = action.obj.value;

            break;
          case 'solarLooseWiringConnectionFactor':
            draftState.solarLooseWiringConnectionFactor = action.obj.value;

            break;
          case 'inverterFutureLoadExpansionFactor':
            draftState.inverterFutureLoadExpansionFactor = action.obj.value;

            break;
          case 'inverterEfficiency':
            draftState.inverterEfficiency = action.obj.value;

            break;
          case 'inverterPowerFactor':
            draftState.inverterPowerFactor = action.obj.value;

            break;
          default:
            break;
        }
        if (Object.keys(draftState)[0] === action.obj.name) {
          console.log('KWh', action.obj.name);
          draftState.KWh = action.obj.value;
        }
      });
    }
    default:
      console.log('default');

      return state;
  }
}
export default PanelSizing;
