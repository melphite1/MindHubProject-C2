const initialState = {
    games: [],
    categories: []
}

const gamesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GETGAMES':
            return {
                ...state,
                games: action.payload
            }
    }
}

export default gamesReducer