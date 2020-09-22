import axios from 'axios'

const newsActions = {
    getnews: () => {
        return async (dispatch, getState) => {
            const respuesta = await axios.get('https://scapeteamred.herokuapp.com/api/news')
            dispatch({
                type: "GET_NEWS",
                payload: respuesta.data

            })
        }
    },
    putCommentary: (idNews, content, token) => {
        return async (dispatch, getState) => {
            
            const response = await axios.post(`https://scapeteamred.herokuapp.com/api/news/comments`, { idNews, content }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }
    },
    getCommentaries: () => {
        return async (dispatch, getState) => {
            
            const response = await axios.get(`https://scapeteamred.herokuapp.com/api/news/comments`)
            
            dispatch({
                type: 'GETCOMMENTARIES',
                payload: response.data.commentary
            })
        }
    },
    deleteCommentary: (idComment) => {
        return async (dispatch, getState) => {
            
            const response = await axios.put(`https://scapeteamred.herokuapp.com/api/news/deleteCommentary`, { idComment })
            dispatch({
                type: 'GETCOMMENTARIES',
                payload: response.data.comments
            })
        }
    },
    modifyCommentary: (content, idComment) => {
        return async (dispatch, getState) => {
            
            const response = await axios.put(`https://scapeteamred.herokuapp.com/api/news/modifyCommentary`, { content, idComment })
            dispatch({
                type: 'GETCOMMENTARIES',
                payload: response.data.comments
            })
        }
    }
}

export default newsActions