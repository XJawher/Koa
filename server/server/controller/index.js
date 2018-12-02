// const config = require('../config');
// const service = require('../service');
// const handler = require('../module/handler');
const model = {

    '/api/test/get': ctx => {
        console.log(ctx.param);
        ctx.body = {code: 0, data: 'start to de-initialize cluster'};
    },

    '/api/testapi': ctx => {
        ctx.body = ctx;
    },
    
    '/api/test/post': ctx => {
        console.log(ctx.request);
        
        ctx.body = ctx.param || {code:1,data:'have no idea about  ctx.param'};
    },
   
};
module.exports = model;