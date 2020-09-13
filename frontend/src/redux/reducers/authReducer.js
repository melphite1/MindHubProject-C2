const initialState = {
    token: [],
    username: [],
    profilePic: []
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGUSER':
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                username: action.payload.username,
                profilePic: action.payload.profilePic
            }
        case 'UNLOGUSER':
            localStorage.clear()
            return {
                ...state, 
                ...initialState
            }
            default: 
                return state
    }
}

export default authReducer