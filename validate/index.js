function trim(value) {
    return String(value).replace(/^\s*|\s*$/g, '');
}

const validate = {
    isNull(value) {
        return value == null;
    },

    isEmpty(value) {
        return validate.isNull(value) || trim(value) === '';
    },

    isNotEmpty(value) {
        return !validate.isEmpty(value);
    },

    mobile(value) {
        return /^\d{11}$/.test(trim(value));
    },

    isMobile(value) {
        return /^\d{11}$/.test(trim(value));
    },

    isPassword(value){
        return /^[a-zA-Z0-9_]{6,16}$/.test(trim(value));
    },

    ethAddress(value) {
        return /^0x\w{40}$/g.test(value);
    },

    bscAddress(value) {
        return /^bsc_\w{60}$/g.test(value);
    }
}

// 用法
// let [invalid, msg] = new Validator({
//     phone: '',
//     smsCode: undefined,
//     password: null
// }).validate({
//     'phone': [{
//         name:'isMobile',
//         msg:'手机号格式不对'
//     }],
//     'smsCode': [{
//         name: 'required',
//         msg: '验证码不能为空'
//     }],
//     'password': [{
//         name: 'required',
//         msg: '密码不能为空'
//     }]
// });

// console.log(invalid, msg);   // true, '验证码不能为空'
class Validator {
    constructor(data, config) {
        this.data = data;
        this.config = config;
    }

    validate() {
        let invalid = false;
        let msg = '';

        Object.keys(this.config).some(fieldName => {
            let fieldConfig = this.config[fieldName];
            let isRequired = fieldConfig.some(item=>item.name === 'required');

            return fieldConfig.some(configItem => {
                let fieldValue = this.data[fieldName];
                let fn = configItem.name == 'required' ? 'isNotEmpty' : configItem.name;
                fn = validate[fn];

                if (fn) {
                    //如果不是必须，且只为空,跳过
                    if(!isRequired && validate.isEmpty(fieldValue)) return;

                    if (!fn(fieldValue)) {
                        invalid = true;
                        msg = configItem.msg;
                        return true;
                    }
                }
            });
        });

        return [invalid, msg];
    }
}

validate.Validator = Validator;



module.exports = validate;