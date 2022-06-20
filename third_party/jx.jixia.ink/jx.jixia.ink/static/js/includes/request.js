import axios from 'axios';
import Qs from 'qs';
import {
    Notify
} from 'notiflix/build/notiflix-notify-aio';
import auth from './auth';
import md5 from 'js-md5';

const API = 'https://api.chenflxs.top';
const USUS = 'jixia'; // 用户标识

var instance = axios.create({
    baseURL: API,
    timeout: 1000000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
});

instance.interceptors.request.use((config) => {
    if (localStorage.getItem('token')) {
        config.data.token = localStorage.getItem('token');
    }
    if (localStorage.getItem('user_name')) {
        config.data.username = localStorage.getItem('user_name');
    }
    if (config.data.ns === "1") {
        config.data.mother = md5(USUS);
        config.data = Qs.stringify(auth.authentication(config.data));
    } else {
        config.data = Qs.stringify(config.data);
    }

    return config;
}, function(error) {
    return Promise.reject(error.Error);
});
// 请求拦截
instance.interceptors.response.use(
    response => {
        return response.data;;
    }, error => {
        if (error.message.includes('timeout') || error.message.includes('Error')) {
            console.log(error.message);
            Notify.failure('API连接中 请刷新网页')
        } else {
            Notify.failure(error.message)
        }
        return Promise.reject(error);
    });
// 响应拦截
var httpR = {
    async post(url, param) {
        return instance({
            method: 'POST',
            url: url,
            data: param
        })
    }
}

export default httpR;