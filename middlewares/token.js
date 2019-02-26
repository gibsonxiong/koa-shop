const db = require('../db');
const UserModel = db.import('../models/user');

module.exports = function(checkToken = true){
    return async (ctx, next) => {
        //检查post的信息或者url查询参数或者头信息
	  	var token = ctx.request.headers['x-access-token'];

	  	// 解析 token
	  	if (token) {
			//暂定token为userId
            let user = await UserModel.findById(token);
    
            if(user){
                ctx.user = user;
            } else if(checkToken){
                return ctx.sendRes(null,-98,'请重新登录');  
            } else{
                ctx.user = null;
            }
    
        }else if(checkToken){
            return ctx.sendRes(null,-99,'请先登录');
        }
        

        await next();
    };
}