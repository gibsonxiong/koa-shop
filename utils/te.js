const Promise = require('bluebird');
const axios = require('axios');
const addrs = [{
        "id": 1,
        "name": "北京市"
    },
    {
        "id": 2,
        "name": "上海市"
    },
    {
        "id": 3,
        "name": "天津市"
    },
    {
        "id": 4,
        "name": "重庆市"
    },
    {
        "id": 5,
        "name": "河北省"
    },
    {
        "id": 6,
        "name": "山西省"
    },
    {
        "id": 7,
        "name": "河南省"
    },
    {
        "id": 8,
        "name": "辽宁省"
    },
    {
        "id": 9,
        "name": "吉林省"
    },
    {
        "id": 10,
        "name": "黑龙江省"
    },
    {
        "id": 11,
        "name": "内蒙古"
    },
    {
        "id": 12,
        "name": "江苏省"
    },
    {
        "id": 13,
        "name": "山东省"
    },
    {
        "id": 14,
        "name": "安徽省"
    },
    {
        "id": 15,
        "name": "浙江省"
    },
    {
        "id": 16,
        "name": "福建省"
    },
    {
        "id": 17,
        "name": "湖北省"
    },
    {
        "id": 18,
        "name": "湖南省"
    },
    {
        "id": 19,
        "name": "广东省"
    },
    {
        "id": 20,
        "name": "广西自治区"
    },
    {
        "id": 21,
        "name": "江西省"
    },
    {
        "id": 22,
        "name": "四川省"
    },
    {
        "id": 23,
        "name": "海南省"
    },
    {
        "id": 24,
        "name": "贵州省"
    },
    {
        "id": 25,
        "name": "云南省"
    },
    {
        "id": 26,
        "name": "西藏自治区"
    },
    {
        "id": 27,
        "name": "陕西省"
    },
    {
        "id": 28,
        "name": "甘肃省"
    },
    {
        "id": 29,
        "name": "青海省"
    },
    {
        "id": 30,
        "name": "宁夏省"
    },
    {
        "id": 31,
        "name": "新疆自治区"
    },
    {
        "id": 32,
        "name": "台湾"
    },
    {
        "id": 84,
        "name": "钓鱼岛"
    },
    {
        "id": 52993,
        "name": "港澳地区"
    },
    {
        "id": 53283,
        "name": "海外"
    }
];

Promise.each(addrs, async item => {


    console.log((await axios.options(`https://wq.jd.com/deal/recvaddr/getprovince?r=0.6041371521650734&provinceid=${item.id}&sceneval=2`, {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "no-cache",
            "pragma": "no-cache"
        },
    })).data);
});