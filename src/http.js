import axios from 'axios';
import qs from 'qs';
import webConfig from './webConfig.js';

var baseUrl = '';
var http = process.env.VUE_APP_API;
switch (http) {
    case 'dev':
        baseUrl = webConfig.dev;
        break;
    case 'alpha':
        baseUrl = webConfig.alpha;
        break;
    case 'prod':
        baseUrl = webConfig.prod;
        break;
    default:
        baseUrl = webConfig.local;
}

axios.interceptors.request.use(
    config => {
        // config.data = qs.stringify(config.data)
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response) {
        error.message = '请求错误：' + error.response.status;
    } else {
        error.message = '请求失败';
    }
    return Promise.reject(error);
})

export default {
    post: (path, headers = {}, params = {}) => {
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + path, params, {
                headers: headers
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    get: (path, headers = {}, params = {}) => {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + path, {
                params: params,
                headers: headers
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}