import axios from 'axios'

const journalApi = axios.create({
    baseURL:'https://vue-demos-fd1c7-default-rtdb.firebaseio.com',

})

export default journalApi