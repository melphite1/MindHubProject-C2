import axios from 'axios'

const auxActions = {
    getCountries: () => {
        return async (dispatch, getState) => {
            const response = await axios.get('https://restcountries.eu/rest/v2/all');
              const info = response.data;
            dispatch({
                type:'GETCOUNTRIES',
                payload: info
            })
        }
    },
    
}


export default auxActions