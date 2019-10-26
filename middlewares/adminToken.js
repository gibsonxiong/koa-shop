const db = require('../db');
const core = require('../core');

module.exports = function (checkToken = true) {
    return async (ctx, next) => {
        let sendRes = async (data, code, msg) => {
            if (checkToken) {
                ctx.sendRes(data, code, msg);
            } else {
                await next();
            }
        };

        //检查post的信息或者url查询参数或者头信息
        let token = ctx.request.headers['authorization'];
        if (!token) {
            await sendRes(null, 96);
            return;
        }

        //验证token
        let decoded;
        try {
            decoded = await core.verifyToken(token);

        } catch (err) {
            if (err.name === 'TokenExpiredError') {
                await sendRes(null, 99);
                return;
            } else {
                await sendRes(null, 97);
                return;
            }

        }

        try {
            let shopUser = await db.models.shop_user.findById(decoded.id);

            if (shopUser) {
                ctx.shopUser = shopUser;
            } else {
                await sendRes(null, 98);
                return;
            }
        } catch (err) {
            return ctx.sendRes(null, 50);
        }

        await next();
    };
}