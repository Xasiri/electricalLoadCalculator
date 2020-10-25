import filter from './filter'
import table from './products'
import cables from './cables'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    table,
    filter,
    cables
})

export default rootReducer