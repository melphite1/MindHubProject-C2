import Axios from 'axios'

// IMPORTANTE: nombreBackend: rutas/props que deben tener el nombre que se les da en el backend

const gamesActions = {
    getGames: () => {
        return async (dispatch, getState) => {
            let response = await Axios.get('http://127.0.0.1:4000/api/nombreBackend')
            dispatch({
                type: 'GETGAMES',
                payload: { games: response.data.nombreBackend }
            })
        }
    }
}

export default gamesActions