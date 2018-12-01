// const config = require('../config');
// const service = require('../service');
// const handler = require('../module/handler');
const model = {
    '/api/testapi': ctx => {
        console.info(ctx);
        ctx.body = ctx;
    },
   
};
module.exports = model;