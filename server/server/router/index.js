const Router = require('koa-router');
const router = new Router();
const controller = require('../controller');

router.all('/api/testapi', controller['/api/testapi']);


module.exports = router;