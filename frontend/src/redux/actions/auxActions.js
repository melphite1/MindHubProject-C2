import axios from 'axios'

const auxActions = {
    sendConsole: (favConsole, username) => {
        return async (dispatch, getState) => {
            
            const response = await axios.put('https://scapeteamred.herokuapp.com/api/setConsole', { favConsole, username });

        }
    },

}


export default auxActions