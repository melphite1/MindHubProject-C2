import authReducer from '../reducers/authReducer'
const { combineReducers } = require('redux')


const rootReducer = combineReducers ({
    games: gamesReducer,
    users: authReducer,
})

export default rootReducer