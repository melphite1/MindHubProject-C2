import Axios from 'axios'

// IMPORTANTE: nombreBackend: rutas/props que deben tener el nombre que se les da en el backend

const gamesActions = {
     getCategories: () => {
        return async (dispatch, getState) => {
            let response = await Axios.get('http://127.0.0.1:4000/api/categories')
            dispatch({
                type: 'GETCATEGORIES',
                payload: response.data.listCategories
            })
        }
    },

    getSpecificGames: categoryId => {
        return async (dispatch, getState) => {
            const response = await Axios.get('http://127.0.0.1:4000/api/games/'+categoryId);
              const info = response.data;
            dispatch({
                type:'GET_SPECIFIC_GAMES',
                payload: info
            })
        }
    }
}

export default gamesActions