import axios from 'axios';

// https://qiita.com/ksh-fthr/items/2daaaf3a15c4c11956e9
const ApiFile = axios.create({
    // baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/xml',
        // 'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'text',
    // responseType: 'json'
});

export default ApiFile;
