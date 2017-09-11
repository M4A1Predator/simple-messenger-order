import { combineReducers } from 'redux'
import appReducers from './appReducers'

const reducers = combineReducers({
    // webData: (state={}, action) => {
    //     if(action.type === 'ADD_NUM'){
    //         state = action.data
    //     }
    //     return state
    // }
    orderData : appReducers
})

export default reducers
