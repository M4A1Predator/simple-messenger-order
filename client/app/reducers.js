import { combineReducers } from 'redux'

const reducers = combineReducers({
    webData: (state={}, action) => {
        if(action.type === 'ADD_NUM'){
            state = action.data
        }
        return state
    }
})

export default reducers
