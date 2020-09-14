import Axios from 'axios'

const newsActions = {
    getnews: () => {
        return async (dispatch, getState) => {
           const respuesta = await Axios.get('http://127.0.0.1:4000/api/news')/* ->PEDIR RUTA AL BACKEND<- */       

           dispatch({
            type: "GET_NEWS",
            payload:  respuesta.data
            
        })
        }
  
    }
    
}

export default newsActions