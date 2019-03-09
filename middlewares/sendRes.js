module.exports = function(){
    return async (ctx, next) => {
        ctx.sendRes = (data, code = 0, message='')=>{
            ctx.body = {
                data,
                code,
                message
            }
        }

        ctx.sendResObject = (obj)=>{
            ctx.body = obj;
        }

        await next();
    };
}