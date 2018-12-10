import {stringify} from 'querystring';
// this url is always allowed to access
// let alwaysAllowURLs = ['/api/systems/checkInit'];

let initRequest = (url, options) => {
    return new Promise(async (resolve, reject) => {
        options.credentials = 'same-origin';
        options.headers = {'Content-Type': 'application/json; charset=utf-8'};
        try {
            let response = await fetch(url, options);
            if (response.ok) {
                let {code, data, msg} = await response.json();
                if (code === 0) {
                    resolve(data);
                } else {
                    reject({code, msg});
                }
            } else {
                const {status, statusText} = response;
                reject({msg: statusText || `http error, code: ${status}`});
                console.info(`%c http error, code: ${status}`, 'color: #CC0033');
            }
        } catch (error) {
            reject(error);
        }
    });
};

let initSearchUrl = (url, param) => (param ? url + '?' + stringify(param) : url);

export let fetchGet = (url, param) => (initRequest(initSearchUrl(url, param), {method: 'GET'}));

export let fetchPost = (url, param) => (initRequest(url, {method: 'POST', body: JSON.stringify(param)}));

export let fetchMock = (data) => new Promise(resolve => setTimeout(() => resolve(data || true), 500));