import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-a250b.firebaseio.com/'
});

export default instance;