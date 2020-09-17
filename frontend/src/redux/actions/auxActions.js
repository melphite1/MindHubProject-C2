import axios from 'axios'

const auxActions = {
    sendConsole: (favConsole, username) => {
        return async (dispatch, getState) => {
            
            const response = await axios.put('http://127.0.0.1:4000/api/setConsole', { favConsole, username });

        }
    },

}


export default auxActions