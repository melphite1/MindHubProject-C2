import usersReducer from '../reducers/usersReducer'
import gamesReducer from '../reducers/gamesReducer'
import auxReducer from '../reducers/auxReducer'
import newsReducer from "../reducers/nexsReducer"
const { combineReducers } = require('redux')



const rootReducer = combineReducers({
    // gamesReducer: gamesReducer,
    usersReducer: usersReducer,
    auxReducer: auxReducer,
    newsReducer: newsReducer

})

export default rootReducer