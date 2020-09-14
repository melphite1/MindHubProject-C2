import Axios from 'axios'

// IMPORTANTE: nombreBackend: rutas/props que deben tener el nombre que se les da en el backend

const gamesActions = {
    getGames: () => {
        return async (dispatch, getState) => {
            let response = await Axios.get('http://127.0.0.1:4000/api/games')/* ->PEDIR RUTA AL BACKEND<- */
            dispatch({
                type: 'GETGAMES',
                payload: { games: response.data.games }
            })
        }
    }
}

export default gamesActions