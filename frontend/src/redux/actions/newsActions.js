import axios from 'axios'

const newsActions = {
    getnews: () => {
        return async (dispatch, getState) => {
            const respuesta = await axios.get('http://127.0.0.1:4000/api/news')/* ->PEDIR RUTA AL BACKEND<- */

            dispatch({
                type: "GET_NEWS",
                payload: respuesta.data

            })
        }
    },
    putCommentary: (idNews, content, token) => {
        return async (dispatch, getState) => {
            
            const response = await axios.post(`http://localhost:4000/api/news/comments`, { idNews, content }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }
    },
    getCommentaries: () => {
        return async (dispatch, getState) => {
            
            const response = await axios.get(`http://localhost:4000/api/news/comments`)
            
            dispatch({
                type: 'GETCOMMENTARIES',
                payload: response.data.commentary
            })
        }
    },
    deleteCommentary: (idComment) => {
        return async (dispatch, getState) => {
            
            const response = await axios.put(`http://localhost:4000/api/news/deleteCommentary`, { idComment })
            dispatch({
                type: 'GETCOMMENTARIES',
                payload: response.data.comments
            })
        }
    },
    modifyCommentary: (content, idComment) => {
        return async (dispatch, getState) => {
            
            const response = await axios.put(`http://localhost:4000/api/news/modifyCommentary`, { content, idComment })
            dispatch({
                type: 'GETCOMMENTARIES',
                payload: response.data.comments
            })
        }
    }
}

export default newsActions