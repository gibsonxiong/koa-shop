var msgMap = {
    '50': '服务器异常',
    '96':'请先登录',
    '97':'用户认证失败，请重新登录',
    '98':'用户不存在，请重新登录',
    '99':'用户信息过期，请重新登录',
}

module.exports = function () {
    return async (ctx, next) => {
        ctx.sendRes = (data, code = 0, message = '') => {
            message = message || msgMap[code] || '';

            ctx.body = {
                data,
                code,
                message
            }
        }

        ctx.sendResObject = (obj) => {
            ctx.body = obj;
        }

        await next();
    };
}