const os = require('os');
const database = require('./database');
const handler = require('../module/handler');
const model = {
    async event(param) {
        let {time, node = os.hostname(), desc, level = 1, source = 'orcafs-gui', read = false} = param;
        try {
            await database.addEventLog({time, node, desc, level, source, read});
        } catch (error) {
            handler.error(162, error, param);
        }
    },
    async audit(param) {
        let {time = new Date(), user, group = 'admin', desc, level = 1, ip = '127.0.0.1'} = param;
        desc = {english: desc, chinese: handler.i18n(desc)};
        try {
            await database.addAuditLog({time, user, group: {english: group, chinese: handler.i18n(group)}, desc, level, ip});
            desc.english.includes('failed') && await model.event({time, desc});
        } catch (error) {
            handler.error(165, error, param);
        }
    }
};
module.exports = model;