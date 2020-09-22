import Axios from 'axios'

// IMPORTANTE: nombreBackend: rutas/props que deben tener el nombre que se les da en el backend

const gamesActions = {
    getCategories: () => {
        return async (dispatch, getState) => {
            let response = await Axios.get('https://scapeteamred.herokuapp.com/api/categories')
            dispatch({
                type: 'GETCATEGORIES',
                payload: response.data.listCategories
            })
        }
    },
    getSpecificGames: categoryId => {
        return async (dispatch, getState) => {
            const response = await Axios.get('https://scapeteamred.herokuapp.com/api/games/' + categoryId);
            const info = response.data;
            dispatch({
                type: 'GET_SPECIFIC_GAMES',
                payload: info
            })
        }
    },
    putCommentary: (idGame, content, token) => {
        return async (dispatch, getState) => {

            const response = await Axios.post(`https://scapeteamred.herokuapp.com/api/games/comments`, { idGame, content }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

        }

    },
    getCommentaries: () => {
        return async (dispatch, getState) => {

            const response = await Axios.get(`https://scapeteamred.herokuapp.com/api/games/comments`)

            dispatch({
                type: 'GETCOMMENTARIES',
                payload: response.data.comment
            })
        }
    },
    deleteCommentary: (idComment) => {
        return async (dispatch, getState) => {

            const response = await Axios.put(`https://scapeteamred.herokuapp.com/api/games/deleteCommentary`, { idComment })
            dispatch({
                type: 'GETCOMMENTARIES',
                payload: response.data.comments
            })
        }
    },
    modifyCommentary: (content, idComment) => {
        return async (dispatch, getState) => {

            const response = await Axios.put(`https://scapeteamred.herokuapp.com/api/games/modifyCommentary`, { content, idComment })
            dispatch({
                type: 'GETCOMMENTARIES',
                payload: response.data.comments
            })
        }
    }

}

export default gamesActions