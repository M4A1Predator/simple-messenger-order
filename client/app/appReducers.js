
const appReducers = (state=null, action) => {

    switch(action.type){
        case 'ORDER':
            state = action.data
            break;
        case 'CLEAR':
            state = null
            break;
    }

    return state
}
export default appReducers
