const Router = require('koa-router');
const router = new Router();
const controller = require('../controller/controller');

router.all('/api/testapi', controller['/api/testapi']);
router.all('/api/test/get', controller['/api/test/get']);
router.all('/api/test/post', controller['/api/test/post']);


module.exports = router;