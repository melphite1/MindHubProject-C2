const initialState = {
    games: [],
    categories:[]
}

const gamesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GETGAMES':
            return {
                ...state,
                games: action.payload
            }
        case 'GETCATEGORIES':
                return {
                    ...state,
                    categories: action.payload
                }
            default:
                return state;
    }
}

export default gamesReducer