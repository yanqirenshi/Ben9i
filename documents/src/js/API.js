import axios from 'axios';

// https://qiita.com/ksh-fthr/items/2daaaf3a15c4c11956e9
const API = axios.create({
    // baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'
});

export default API;
