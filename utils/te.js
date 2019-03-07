const Promise = require('bluebird');
const axios = require('axios');
const fetch = require('node-fetch');
const cheerio = require('cheerio')

let addrs = [
    "北京市",
    "上海市",
    "天津市",
    "重庆市",
    "河北省",
    "山西省",
    "河南省",
    "辽宁省",
    "吉林省",
    "黑龙江省",
    "内蒙古自治区",
    "江苏省",
    "山东省",
    "安徽省",
    "浙江省",
    "福建省",
    "湖北省",
    "湖南省",
    "广东省",
    "广西壮族自治区",
    "江西省",
    "四川省",
    "海南省",
    "贵州省",
    "云南省",
    "西藏自治区",
    "陕西省",
    "甘肃省",
    "青海省",
    "宁夏回族自治区",
    "新疆维吾尔自治区"
];

addrs = addrs.map((item, index) => {
    return {
        id: index + 1,
        name: item
    }
});

async function init(){
    await Promise.each(addrs, async prov => {
        await add(prov.id,'city');
    });


    console.log(addrs);
}

init();


function sleep(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve();
        }, 300);

    })
}

async function add(parentId,type) {
    try {
        await sleep();
        let b = await fetch(`https://m.mia.com/instant/order/get_${ type === 'city' ? 'cities':'areas'}?_=${+new Date()}`, {
            "credentials": "include",
            "headers": {
                "accept": "text/plain",
                "accept-language": "zh-CN,zh;q=0.9",
                'Origin': 'https://m.mia.com',
                'Referer': 'https://m.mia.com/order/index',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.80 Safari/537.36',
                'x-requested-with': 'XMLHttpRequest',
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded",
                "pragma": "no-cache",
                "x-requested-with": "XMLHttpRequest",
                'Cookie': 'sid=m1687412cda41ddc1; NTKF_T2D_CLIENTID=guestE4321984-F2C2-02D8-8DBB-7412CDBF8D1B; Hm_lvt_4037cc2cae85a0650ac6293abc7fbe9e=1548135616; ag_fid=2VGPMQdag5hOFogF; _jzqco=%7C%7C%7C%7C%7C1.1982935104.1548135616096.1548135656808.1548135660351.1548135656808.1548135660351.0.0.0.3.3; OUTFOX_SEARCH_USER_ID_NCOO=1621008078.6523306; miauid=35816819; miyaid=pjo8s7hb2o2i73r60beslbb8p2; Hm_lvt_c6d491fe2bcea1a53f37d5f7f20a8806=1551752533,1551752634,1551752750,1551922517; Hm_lvt_d2cf6545e0ff1d556245dafeb1e76ed6=1551405053,1551697740,1551748920,1551922527; usernames=%25E7%2586%258A%25E5%2595%258A_wx; uidInfo=MjU5Njc5LTM1ODE2ODE5; username=NTY1ODYyLXM6MTU6Im1peWExMzY4NjAwNDUxOCI7; live_h=251FD39BBCD05A0DD36D1D769F8BEBC9; live_info=userId%253D35816819%2526loginname%253Dmiya13686004518%2526grade%253D5%2526name%253D%25E7%2586%258A%25E5%2595%258A_wx%2526memo%253D%25E6%258E%25A5%25E5%258F%25A3%25E9%25AA%258C%25E8%25AF%2581%25E6%2595%25B0%25E6%258D%25AE%2526hashCode%253D251FD39BBCD05A0DD36D1D769F8BEBC9%2526timestamp%253D1551922541151; scan_sku=3009036,2847504,1797513,2804816,3002809; nTalk_CACHE_DATA={uid:hw_1000_ISME9754_getcookie(|miauid|),tid:1551922574709232}; item_size=L; __ag_cm_=1; Hm_lpvt_d2cf6545e0ff1d556245dafeb1e76ed6=1551922671; Hm_lpvt_c6d491fe2bcea1a53f37d5f7f20a8806=1551922671; WT_FPC=id=28502430771ceedff441548135615319:lv=1551922675901:ss=1551922517011:lsv=1551751852694:vs=1:spv=13'
            },
            "referrer": "https://m.mia.com/order/index",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body":   `${type === 'city' ? 'province': 'city'}_id=${parentId}`,
            "method": "POST",
            "mode": "cors"
        });
        let t = await b.text();

        const $ = cheerio.load(t);


        await Promise.each($('select option').toArray(),async (city,i) => {
            if (i === 0) return;

            let name = $(city).text();
            let id = $(city).val();

            addrs.push({
                id: id,
                name,
                parentId
            });

            await add(id,'area');
        })
    } catch (err) {
        console.log(err);
    }
}