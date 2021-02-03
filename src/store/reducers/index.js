import filter from './filter'
import table from './products'
import cables from './cables'
import shortCircuitCables from './shortCircuitCable'
import panelSizing from './PanelSizing'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    table,
    filter,
    cables,
    shortCircuitCables,
    panelSizing
})

export default rootReducer