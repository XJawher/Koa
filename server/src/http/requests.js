import {fetchGet, fetchPost} from './fetch';

let requestMiddleWare = fn => {
    try {
        return fn();
    } catch (e) {
        return {code: 1, message: e};
    }
};

export default {

    /**
     * function name:test api
     * application:测试 get 方法
     */
    async testGet(ip = '', action = '') {
        return requestMiddleWare(async () => {
            let data = await fetchGet('/api/test/get', {data: '123'});
            return data;
        });
    },

    /**
     * function name:test api
     * application: 测试 post 方法
     */
    async testPost(name = '') {
        return requestMiddleWare(async () => {
            let data = await fetchPost('/api/test/post', {name: 'name'});
            return data;
        });
    },
};