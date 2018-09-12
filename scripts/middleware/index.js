// const config = require('../config');
// const init = require('../service/initialize');
const model = {
    checkKey() {
        return async (ctx, next) => {
            ctx.body = { code: 20, message: '111' };
        }
    }
}

module.exports = model;