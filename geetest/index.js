var Geetest = require('./gt-sdk');
const config = require('../config');

let geetest = new Geetest(config.geetest);

function gtRegisterPromise() {
    return new Promise((resolve, reject) => {
        geetest.register(null, function (err, data) {
            if (err) {
                return reject(err);
            }

            resolve(data);
        });
    });
}

function gtValidatePromise({
    fallback,
    geetest_challenge,
    geetest_validate,
    geetest_seccode
}) {
    return new Promise((resolve, reject) => {
        geetest.validate(fallback, {
            geetest_challenge,
            geetest_validate,
            geetest_seccode
        }, function (err, success) {

            if (err) {
                return reject(err);
            }

            if (!success) {
                reject(new Error('滑块验证失败'));
            } else {
                resolve();
            }
        });
    });
}

exports.geetest = geetest;
exports.gtRegisterPromise = gtRegisterPromise;
exports.gtValidatePromise = gtValidatePromise;
