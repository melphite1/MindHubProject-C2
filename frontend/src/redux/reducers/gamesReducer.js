const initialState = {
    games: [],
    categories: [],
    commentaries: []
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GETCATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        case 'GET_SPECIFIC_GAMES':
            return {
                ...state,
                games: action.payload.games
            }
        case 'GETCOMMENTARIES':
            return {
                ...state,
                commentaries: action.payload
            }
        default:
            return state;
    }
}

export default gamesReducer