import Axios from 'axios'

// IMPORTANTE: nombreBackend: rutas/props que deben tener el nombre que se les da en el backend

const authActions = {
    newUser: newUser => {
        return async (dispatch, getState) => {
            let response = await Axios.post('http://127.0.0.1:4000/api/nombreBackend', newUser)
            if(response.data.success) {
                dispatch({
                    type: 'LOGUSER',
                    payload: { token:response.data.nombreBackend, username:response.data.nombreBackend, profilePic: response.data.nombreBackend }
                })
            } else {
                alert(response.data.nombreErrorBackend)
            }
        }
    }, 

    logUser: logUser => {
        return async (dispatch, getState) => {
            let response = await Axios.post('http://127.0.0.1:4000/api/nombreBackend', user)
            if(response.data.success) {
                dispatch({
                    type: 'LOGUSER',
                    payload: { token:response.data.nombreBackend, username:response.data.nombreBackend, profilePic: response.data.nombreBackend }
                })
            } else {
                alert(response.data.nombreErrorBackend)
            }
        }
    },

    unlogUser: () => {
        return (dispatch, getState) => {
            dispatch({
                type: "UNLOGUSER"
            })
        }
    },

    logUserLS: LStoken => {
        return async (dispatch, getState) => {
            let response = await axios.get('http://127.0.0.1:4000/api/(nombreBackend)')
            if(response.data.success) {
                dispatch({
                    type:'LOGUSER',
                    payload:{token: LStoken, username:response.data.nombreBackend, profilePic: response.data.nombreBackend }
                })
            }
        }
    }
}

export default authActions