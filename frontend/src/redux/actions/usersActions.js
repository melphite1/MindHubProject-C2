import axios from 'axios'

const usersActions = {


    createAccount: newUser => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://127.0.0.1:4000/api/user', newUser)/* ->PEDIR RUTA AL BACKEND<- */

            if (response.data.success !== true) {
                alert(response.data.error)
                console.log(response.data)
            } else {
                dispatch({
                    type: 'SET_USER',
                    payload: {
                        name: response.data.name,
                        urlpic: response.data.urlpic,
                        token: response.data.token,
                        firstTime: response.data.firstTime
                    }
                })
            }


        }
    },

    userLogIn: newUser => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://127.0.0.1:4000/api/login', newUser)/* ->PEDIR RUTA AL BACKEND<- */

            if (!response.data.success) {
                alert(response.data.message)
            }
            else {
                dispatch({
                    type: 'SET_USER',
                    payload: {
                        name: response.data.name,
                        urlpic: response.data.urlpic,
                        token: response.data.token,
                        username: response.data.username,
                        firstTime: response.data.firstTime
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

    forcedLogIn: tokenLS => {
        return async (dispatch, getState) => {
            const response = await axios.get('http://127.0.0.1:4000/api/tokenVerificator', {
                headers: {
                    Authorization: `Bearer ${tokenLS}`
                }
            })

            dispatch({
                type: "SET_USER",
                payload: {
                    name: response.data.name,
                    urlpic: response.data.urlpic,
                    token: tokenLS,
                    username: response.data.username,
                    firstTime: response.data.firstTime
                }
            })

        }
    }


}


export default usersActions