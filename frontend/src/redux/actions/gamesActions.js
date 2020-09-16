import Axios from 'axios'

// IMPORTANTE: nombreBackend: rutas/props que deben tener el nombre que se les da en el backend

const gamesActions = {
     getCategories: () => {
        return async (dispatch, getState) => {
<<<<<<< HEAD
            let response = await Axios.get('http://127.0.0.1:4000/api/games')
            dispatch({
                type: 'GETGAMES',
                payload: { games: response.data.games }
=======
            let response = await Axios.get('http://127.0.0.1:4000/api/categories')
            dispatch({
                type: 'GETCATEGORIES',
                payload: response.data.listCategories
>>>>>>> d30f7a1ad127e12ab178455c7c48d462c43f6174
            })
        }
    },

    getSpecificGames: categoryId => {
        return async (dispatch, getState) => {
<<<<<<< HEAD
            let response = await Axios.get('http://127.0.0.1:4000/api/category')
            dispatch({
                type: 'GETCATEGORIES',
                payload: response.data.listGamesCategory
=======
            const response = await Axios.get('http://127.0.0.1:4000/api/games/'+categoryId);
              const info = response.data;
            dispatch({
                type:'GET_SPECIFIC_GAMES',
                payload: info
>>>>>>> d30f7a1ad127e12ab178455c7c48d462c43f6174
            })
        }
    }
}

export default gamesActions