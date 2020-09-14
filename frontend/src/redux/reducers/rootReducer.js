import usersReducer from '../reducers/usersReducer'
import gamesReducer from '../reducers/gamesReducer'
import auxReducer from '../reducers/auxReducer'
const { combineReducers } = require('redux')


const rootReducer = combineReducers({
    gamesReducer: gamesReducer,
    usersReducer: usersReducer,
    auxReducer: auxReducer
})

export default rootReducer