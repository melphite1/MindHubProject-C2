import axios from 'axios'
import Swal from '../../../node_modules/sweetalert2/src/sweetalert2'
import HappySquare from '../../images/happysquare.png'
import SadSquare from '../../images/sadsquare.png'
import '../../styles/styles.css'

const usersActions = {

    createAccount: fd => {
     
        return async (dispatch, getState) => {
            const response = await axios.post('https://scapeteamred.herokuapp.com/api/user', fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }

            })
           
            /* ->PEDIR RUTA AL BACKEND<- */
            if (response.data.success !== true) {
          
                Swal.fire({
                    title: 'Im sorry :(',
                    imageUrl: `${SadSquare}`,
                    imageWidth: 180,
                    imageHeight: 180,
                    imageAlt: 'Sad square :(',
                    text: response.data.message,
                })
            } else {
                if (response.data.token) {
                    Swal.fire({
                        title: 'Welcome!',
                        imageUrl: `${HappySquare}`,
                        imageWidth: 180,
                        imageHeight: 180,
                        imageAlt: 'Happy square :D',
                        animation: false,
                        text: 'I am very happy to meet you!',
                        timer: 2000,
                        showConfirmButton: false
                    })
                    setTimeout(() => {
                        dispatch({
                            type: 'SET_USER',
                            payload: {
                                name: response.data.name,
                                urlpic: response.data.urlpic,
                                token: response.data.token,
                                firstTime: response.data.firstTime,
                                lastName: response.data.lastName,
                                email: response.data.email,
                                favConsole: response.data.favConsole
                            }
                        })
                    }, 2000)

                }

            }


        }
    },
    createAccountGoogle: newUser => {
        return async (dispatch, getState) => {
            const response = await axios.post('https://scapeteamred.herokuapp.com/api/userGoogle', newUser)/* ->PEDIR RUTA AL BACKEND<- */

            if (response.data.success !== true) {
              
            
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: response.data.message,
                })
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
            const response = await axios.post('https://scapeteamred.herokuapp.com/api/login', newUser)/* ->PEDIR RUTA AL BACKEND<- */
           
            if (!response.data.success) {
                Swal.fire({
                    title: 'Im sorry :(',
                    imageUrl: `${SadSquare}`,
                    imageWidth: 180,
                    imageHeight: 180,
                    imageAlt: 'Sad square :(',
                    text: response.data.message,
                })
            } else {
                if (response.data.token) {
                    Swal.fire({
                        title: 'Welcome!',
                        imageUrl: `${HappySquare}`,
                        imageWidth: 180,
                        imageHeight: 180,
                        imageAlt: 'Custom image',
                        animation: false,
                        text: 'I miss you a lot!',
                        timer: 2000,
                        showConfirmButton: false
                    })
                    setTimeout(() => {
                        dispatch({
                            type: 'SET_USER',
                            payload: {
                                name: response.data.name,
                                urlpic: response.data.urlpic,
                                token: response.data.token,
                                username: response.data.username,
                                firstTime: response.data.firstTime,
                                lastName: response.data.lastName,
                                email: response.data.email,
                                favConsole: response.data.favConsole
                            }
                        })
                    }, 2000)

                }
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
            const response = await axios.get('https://scapeteamred.herokuapp.com/api/tokenVerificator', {
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
                    firstTime: response.data.firstTime,
                    lastname: response.data.lastname,
                    email: response.data.email,
                    favConsole: response.data.favConsole

                }
            })

        }
    },
    modifyUser: (fd) => {
  
        return async (dispatch, getState) => {
            const response = await axios.put('https://scapeteamred.herokuapp.com/api/modifyUser', fd, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            dispatch({
                type: 'UPDATE_USER',
                payload: {
                    name: response.data.name,
                    lastname: response.data.lastname,
                    favConsole: response.data.favConsole,
                    urlpic: response.data.photoUrl,
                }
            })
        }
    }


}


export default usersActions