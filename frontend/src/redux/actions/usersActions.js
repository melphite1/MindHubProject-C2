import usersReducer from "../reducers/usersReducer"
import axios from 'axios'

const usersActions = {


    createAccount: newUser => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://127.0.0.1:4000/api/user', newUser)/* ->PEDIR RUTA AL BACKEND<- */
            if(response.data.success !== true) {
                alert(response.data.error)
            } else { 
                dispatch({
                    type: 'SET_USER',
                    payload: {
                    name: response.data.name,
                    photo: response.data.photo,
                    token: response.data.token
                }
                })
            }
            
            
        }
    },

    userLogIn: newUser => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://127.0.0.1:4000/api/login', newUser)/* ->PEDIR RUTA AL BACKEND<- */
            if(!response.data.success) { 
                alert(response.data.message)}
            else{
            dispatch({
                type: 'SET_USER',
                payload: {
                    name: response.data.name,
                    photo: response.data.photo,
                    token: response.data.token
                }
            })
            } 

        }
    },

    userLogOut: () => {
        return (dispatch, getState) => {
            dispatch({
                type: "LOGOUT_USER"
            })
        }
    },
    
    forcedLogIn: token => {
        return async (dispatch, getState) => {
            const response = await axios.get('http://127.0.0.1:4000/api/tokenVerificator',/* ->PEDIR RUTA AL BACKEND<- */ {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch({
                type: "SET_USER",
                payload:{
                    name: response.data.name,
                    photo: response.data.photo,
                    token: token
                }
            })

        }
    }
    
    
}


export default usersActions