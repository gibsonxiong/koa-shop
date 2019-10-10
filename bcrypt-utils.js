const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.hash = function (password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function (err, hash) {
            if (err) return reject(err);

            resolve(hash);
        });
    });
}

exports.compare = function (password, passwordHash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, passwordHash, function (err, res) {
            if (err) return reject(err);

            resolve(res);
        });
    });
}