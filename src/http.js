import axios from 'axios';
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
}

export default {
    POST: (path, headers = {}, params = {}) => {
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
    GET: (path, headers = {}, params = {}) => {
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