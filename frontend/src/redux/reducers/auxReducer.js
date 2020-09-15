const initialState = {

}

const auxReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GETCOUNTRIES':
            return {
                ...state,
                countries: [...action.payload]
            }
        default:
            return state
    }
}

export default auxReducer