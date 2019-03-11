var Geetest = require('./gt-sdk');

let geetest = new Geetest({
    geetest_id: '217ac21771ff1fc0dc339db57eb4e803',
    geetest_key: '6db0a1496e5fd09478998a393482e772'
});



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
