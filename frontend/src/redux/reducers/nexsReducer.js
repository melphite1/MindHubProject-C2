const initialState = {
    news: [],
    commentaries: []
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NEWS':
            return {
                ...state,
                news: action.payload
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


export default newsReducer