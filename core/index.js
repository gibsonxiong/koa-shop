var jwt = require('jsonwebtoken');
const secret = 'vue_shop';
const redis = require('../redis');
// const tokenExpiresIn = 60 * 60 * 12;    // 12h
const tokenExpiresIn = 10;

exports.genToken = async function (userId) {
    var token = jwt.sign({ id: userId }, secret, { expiresIn: tokenExpiresIn });
    var refreshToken = jwt.sign(token, secret);

    //缓存token和refreshToken
    let key = `token_${refreshToken}`;
    await redis.setAsync(key, token);
    await redis.expireAsync(key, tokenExpiresIn * 2);

    return {
        token,
        refreshToken
    };
}

exports.refreshToken = async function (refreshToken) {
    if (!refreshToken) throw new Error('RefreshToken无效');

    let token = await redis.getAsync(`token_${refreshToken}`);

    if (!token) throw new Error('RefreshToken无效');

    //重新生成token
    let decoded = jwt.decode(token);
    let newToken = jwt.sign({ id: decoded.id }, secret, { expiresIn: tokenExpiresIn });
    var newRefreshToken = jwt.sign(newToken, secret);

    //删除之前refreshToken
    await redis.delAsync(`token_${refreshToken}`);

    // //设置之前的token不能用
    // await exports.disableToken(token);

    //重新缓存token和refreshToken
    let key = `token_${newRefreshToken}`;
    await redis.setAsync(key, newToken);
    await redis.expireAsync(key, tokenExpiresIn * 2);

    return {
        token: newToken,
        refreshToken: newRefreshToken
    }
}

exports.verifyToken = async function (token) {
    // //refresh过的token不可用
    // let disabled = await redis.getAsync(`disabled_token_${token}`);

    // if (disabled) throw new Error('Token失效');

    return jwt.verify(token, secret);
}

exports.disableToken = async function (token) {
    console.log('disableToken', token);
    let disabledKey = `disabled_token_${token}`;
    await redis.setAsync(disabledKey, '1');
    await redis.expireAsync(disabledKey, tokenExpiresIn * 2);
}

exports.isTokenDisabled = async function (token) {
    let disabled = await redis.getAsync(`disabled_token_${token}`);

    return !!disabled;
}


//测试
// async function test() {
//     var { token, refreshToken } = await exports.genToken(1);
//     console.log(token, refreshToken);

//     setTimeout(async () => {
//         try {
//             var decoded = await exports.verifyToken(token);
//             console.log(decoded);
//         } catch (err) {
//             console.log(err);
//             //
//             let newInfo = await exports.refreshToken(refreshToken);

//             var decoded = await exports.verifyToken(newInfo.token);
//             console.log(decoded);
//         }
//     },6000);

// }


// async function test() {
//     var { token, refreshToken } = await exports.genToken(1);
//     //
//     let newInfo = await exports.refreshToken(refreshToken);

//     var tokenInfo = await exports.genToken(1);

//     //
//     let newInfo2 = await exports.refreshToken(tokenInfo.refreshToken);

//     try {
//         var decoded = await exports.verifyToken(newInfo2.token);
//         console.log(decoded);
//     } catch (err) {
//         console.log(err);
//     }

//     // setTimeout(async () => {
//     //     try {
//     //         var decoded = await exports.verifyToken(newInfo.token);
//     //         console.log(decoded);
//     //     } catch (err) {
//     //         console.log(err);
//     //     }
//     // }, 8000);


// }

// test();