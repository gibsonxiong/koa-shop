const db = require('./index');
const {
    models
} = db;

async function init() {


    await db.sync({
        force: true
    });

    let data = [{
            "id": 1,
            "name": "女装"
        },
        {
            "id": 2,
            "name": "手机数码"
        },
        {
            "id": 3,
            "name": "鞋靴"
        },
        {
            "id": 4,
            "name": "男装"
        },
        {
            "id": 5,
            "name": "百货"
        },
        {
            "id": 7,
            "name": "食品"
        },
        {
            "id": 8,
            "name": "家电"
        },
        {
            "id": 9,
            "name": "美妆洗护"
        },
        {
            "id": 10,
            "name": "内衣配饰"
        },
        {
            "id": 12,
            "name": "母婴"
        },
        {
            "id": 13,
            "name": "箱包"
        },
        {
            "id": 14,
            "name": "家装"
        },
        {
            "id": 15,
            "name": "整车车品"
        },

        {
            "id": 23,
            "name": "连衣裙",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB1Q3URsN1YBuNjy1zcSuvNcXXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 24,
            "name": "短外套",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB1A_a6seuSBuNjy1XcSuwYjFXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 25,
            "name": "卫衣/绒衫",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/O1CN01SfcIB62Kq3UA2ZAjG_!!854349607.jpg_140x10000Q75.jpg"
        },
        {
            "id": 26,
            "name": "中老年女装",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB1NmQAsnJYBeNjy1zeSuuhzVXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 27,
            "name": "毛针织衫",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB1i2kXkCzqK1RjSZFjSuvlCFXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 28,
            "name": "大码女装",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB1Nz6vagDD8KJjy0FdSuwjvXXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 29,
            "name": "毛衣",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB2yQ_teYsTMeJjy1zeXXcOCVXa_!!181591559.jpg_140x10000Q75.jpg"
        },
        {
            "id": 30,
            "name": "休闲裤",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB1T.lto7KWBuNjy1zjSuwOypXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 31,
            "name": "蕾丝衫/雪纺衫",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB2L5USvRjTBKNjSZFuXXb0HFXa_!!3818963170-0-daren.jpg_140x10000Q75.jpg"
        },


        {
            "id": 32,
            "name": "美女混搭",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB1hCiHu_qWBKNjSZFASuunSpXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 33,
            "name": "女生校园风",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB2iNPXqXXXXXchXpXXXXXXXXXX_!!77515263-0-goldwindow.jpg_140x10000Q75.jpg"
        },
        {
            "id": 34,
            "name": "女士开襟衫",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB1SyiVgvNZWeJjSZFpSutjBFXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 35,
            "name": "显身材女装",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB1icvTa4GYBuNjy0FnSut5lpXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 36,
            "name": "中性范女装",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/O1CN01Gb0KSr1NgqBkLiJhD_!!1072951600-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },
        {
            "id": 37,
            "name": "少女衣物",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB1aJaUMXXXXXcNXFXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 38,
            "name": "吸精女装",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB1KyPwKFXXXXa4XXXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 39,
            "name": "优雅的女装",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB1nV_1q3oQMeJjy0FnSuv8gFXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 40,
            "name": "不撞衫女装",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB2HYIerYBmpuFjSZFuXXaG_XXa_!!0-juitemmedia.jpg_140x10000Q75.jpg"
        },
        {
            "id": 41,
            "name": "佛系女装",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB1CAFWOFXXXXbsXXXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 42,
            "name": "显肤白女装",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB1tJUuenlYBeNjSszcSuvwhFXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 43,
            "name": "少女风服饰",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB14NjuXLjM8KJjSZFySutdzVXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 44,
            "name": "撩男神穿搭",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB2yE6yamB0XKJjSZFsXXaxfpXa_!!103920571.png_140x10000.jpg"
        },
        {
            "id": 45,
            "name": "女生街头装",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB23QNfa4uI.eBjy0FdXXXgbVXa_!!149-2-yamato.png_140x10000.jpg"
        },
        {
            "id": 46,
            "name": "元气少女装",
            "parentId": 1,
            "img": "https://gw.alicdn.com/tps/TB2BIHmaSKI.eBjy1zcXXXIOpXa_!!183-2-yamato.png_140x10000.jpg"
        },

        //2
        {
            "id": 48,
            "name": "手机保护套/壳",
            "parentId": 2,
            "img": "https://gw.alicdn.com/tps/O1CN011P6JoWETgaz6U33_!!3539141791.png_140x10000.jpg"
        },
        {
            "id": 49,
            "name": "笔记本电脑",
            "parentId": 2,
            "img": "https://gw.alicdn.com/tps/TB2WqwRkkKWBuNjy1zjXXcOypXa_!!2504805576-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },
        {
            "id": 50,
            "name": "平板电脑/MID",
            "parentId": 2,
            "img": "https://gw.alicdn.com/tps/TB2yDHzk22H8KJjy0FcXXaDlFXa_!!0-juitemmedia.jpg_140x10000Q75.jpg"
        },
        {
            "id": 51,
            "name": "移动电源",
            "parentId": 2,
            "img": "https://gw.alicdn.com/tps/TB1bjz3OpXXXXc_XFXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 52,
            "name": "手机数据线",
            "parentId": 2,
            "img": "https://gw.alicdn.com/tps/TB1s7lOnZj_B1NjSZFHSuuDWpXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 53,
            "name": "手机贴膜",
            "parentId": 2,
            "img": "https://gw.alicdn.com/tps/TB1SHrMFXGWBuNjy0FbSuv4sXXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 54,
            "name": "智能手环",
            "parentId": 2,
            "img": "https://gw.alicdn.com/tps/TB2UMSXoxGYBuNjy0FnXXX5lpXa_!!2986852864-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },
        {
            "id": 55,
            "name": "显示器",
            "parentId": 2,
            "img": "https://gw.alicdn.com/tps/TB2u334XFmWBuNjSspdXXbugXXa_!!60757983.jpg_140x10000Q75.jpg"
        },


        {
            "id": 56,
            "name": "手机保护壳",
            "parentId": 2,
            "img": "https://gw.alicdn.com/imgextra/TB1BRmFMpXXXXcIXpXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 57,
            "name": "蓝牙耳机",
            "parentId": 2,
            "img": "https://gw.alicdn.com/tps/TB1BQiLJFXXXXafaXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 58,
            "name": "移动电源",
            "parentId": 2,
            "img": "https://gw.alicdn.com/imgextra/TB1kFhfMpXXXXXmXVXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 59,
            "name": "手机数据线",
            "parentId": 2,
            "img": "https://gw.alicdn.com/imgextra/TB1km7dLFXXXXb1XpXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 60,
            "name": "智能手环",
            "parentId": 2,
            "img": "https://gw.alicdn.com/tps/TB121nXJFXXXXXCXpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 61,
            "name": "手机贴膜",
            "parentId": 2,
            "img": "https://gw.alicdn.com/imgextra/TB14n8HMFXXXXaTXXXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 62,
            "name": "入耳式耳机",
            "parentId": 2,
            "img": "https://gw.alicdn.com/tps/TB196snPpXXXXXrXpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 63,
            "name": "手机充电器",
            "parentId": 2,
            "img": "https://gw.alicdn.com/imgextra/TB1RZMjLFXXXXcoXpXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 64,
            "name": "手机电池",
            "parentId": 2,
            "img": "https://gw.alicdn.com/tps/TB1IbwbPpXXXXX9XFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 65,
            "name": "平板电脑保护套",
            "parentId": 2,
            "img": "https://gw.alicdn.com/imgextra/TB15uHULFXXXXXTXVXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 66,
            "name": "笔记本电脑包",
            "parentId": 2,
            "img": "https://gw.alicdn.com/imgextra/i4/TB1s1seJVXXXXXkXFXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 67,
            "name": "笔记本炫彩贴",
            "parentId": 2,
            "img": "https://gw.alicdn.com/tps/TB1RPksPpXXXXbVXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 68,
            "name": "脚架",
            "parentId": 2,
            "img": "https://gw.alicdn.com/imgextra/TB1utR4MpXXXXauXXXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 69,
            "name": "读卡器",
            "parentId": 2,
            "img": "https://gw.alicdn.com/imgextra/i4/TB1bA__MpXXXXbtXpXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 70,
            "name": "车载充电器",
            "parentId": 2,
            "img": "https://gw.alicdn.com/imgextra/TB1TLAcLFXXXXaFXXXXSutbFXXX.jpg_140x10000Q75.jpg"
        },

        //3

        {
            "id": 77,
            "name": "帆布鞋",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1fbiMKVXXXXczXFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 78,
            "name": "一脚蹬",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1wgCPKVXXXXagXFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 79,
            "name": "高帮鞋",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1U7KMKVXXXXX7XFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 80,
            "name": "内增高鞋",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1NvG2KVXXXXXZXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 81,
            "name": "夏季凉鞋新",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB16cuQKVXXXXbUXpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 82,
            "name": "春季单鞋",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1Yt1IKVXXXXaKXVXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 83,
            "name": "凉拖",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1D15AKVXXXXbLaXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 84,
            "name": "鱼嘴单鞋",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1sROZKVXXXXb7XXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 85,
            "name": "平底单鞋",
            "parentId": 3,
            "img": "https://gw.alicdn.com/imgextra/i1/1088762666/TB2ji1fi5lnpuFjSZFgXXbi7FXa_!!1088762666.jpg_140x10000Q75.jpg"
        },
        {
            "id": 86,
            "name": "尖头单鞋",
            "parentId": 3,
            "img": "https://gw.alicdn.com/imgextra/i1/T1Vj4_FgXhXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 87,
            "name": "小白鞋",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1iaOYKVXXXXbIXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 88,
            "name": "防水台单鞋",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1SgCFKVXXXXcMXVXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 89,
            "name": "运动风",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1plMzJVXXXXb8XFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 90,
            "name": "布洛克鞋",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1BUeSKVXXXXboXpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 91,
            "name": "豆豆鞋",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1iHa2KVXXXXaHXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 92,
            "name": "婚鞋",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1lpGTKVXXXXcjXpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 93,
            "name": "粗跟",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1xrKKKVXXXXXJXVXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 94,
            "name": "坡跟",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1r_WCKVXXXXXeaXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 95,
            "name": "高跟鞋",
            "parentId": 3,
            "img": "https://gw.alicdn.com/imgextra/i3/TB1R74tIXXXXXcDXFXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 96,
            "name": "短靴",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1X8K0KVXXXXbAXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 97,
            "name": "马丁靴",
            "parentId": 3,
            "img": "https://gw.alicdn.com/tps/TB1zmeMKVXXXXcaXFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },

        //4
        {
            "id": 98,
            "name": "夹克",
            "parentId": 4,
            "img": "https://gw.alicdn.com/tps/TB1XdWbA3TqK1RjSZPhSutfOFXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 99,
            "name": "休闲裤",
            "parentId": 4,
            "img": "https://gw.alicdn.com/tps/TB1piAKs25TBuNjSspcSuvnGFXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 100,
            "name": "T恤",
            "parentId": 4,
            "img": "https://gw.alicdn.com/tps/TB1irqfXgYDK1JjSZPiSuvcHVXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 101,
            "name": "卫衣",
            "parentId": 4,
            "img": "https://gw.alicdn.com/tps/TB1iWinmNTpK1RjSZR0SuvEwXXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 102,
            "name": "衬衫",
            "parentId": 4,
            "img": "https://gw.alicdn.com/tps/TB2mgzkf8fH8KJjy1XbXXbLdXXa_!!2795026631-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },
        {
            "id": 103,
            "name": "牛仔裤",
            "parentId": 4,
            "img": "https://gw.alicdn.com/tps/TB1G_e9pnvI8KJjSspjSuwgjXXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 104,
            "name": "风衣",
            "parentId": 4,
            "img": "https://gw.alicdn.com/tps/LB1ATeHqhWYBuNjy1zkXXXGGpXa.png_140x10000.jpg"
        },
        {
            "id": 105,
            "name": "西服",
            "parentId": 4,
            "img": "https://gw.alicdn.com/tps/TB17f8UhInI8KJjSspeSuwwIpXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 106,
            "name": "背心/马甲",
            "parentId": 4,
            "img": "https://gw.alicdn.com/tps/TB2T7T8c1LM8KJjSZFqXXa7.FXa_!!674223902-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },



        {
            "id": 107,
            "name": "薄外套",
            "parentId": 4,
            "img": "https://gw.alicdn.com/imgextra/TB1RoFnMpXXXXa7XpXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 108,
            "name": "风衣",
            "parentId": 4,
            "img": "https://gw.alicdn.com/tps/TB1Mgl_KFXXXXaLXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 109,
            "name": "夹克男",
            "parentId": 4,
            "img": "https://gw.alicdn.com/tps/TB1DSIFPFXXXXcJXpXXXXXXXXXX-350-350.jpg_140x10000Q75.jpg"
        },
        {
            "id": 110,
            "name": "卫衣男",
            "parentId": 4,
            "img": "https://gw.alicdn.com/tps/TB1lHwdPFXXXXXLapXXXXXXXXXX-350-350.jpg_140x10000Q75.jpg"
        },
        {
            "id": 111,
            "name": "棒球服男装",
            "parentId": 4,
            "img": "https://gw.alicdn.com/tps/TB1B7JPKFXXXXaEXVXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 112,
            "name": "皮衣男装",
            "parentId": 4,
            "img": "https://gw.alicdn.com/imgextra/TB1kCA2MXXXXXaqXFXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 113,
            "name": "西装",
            "parentId": 4,
            "img": "https://gw.alicdn.com/imgextra/TB1KLFTMpXXXXb5XXXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 114,
            "name": "牛仔外套",
            "parentId": 4,
            "img": "https://gw.alicdn.com/imgextra/TB1t1hMMpXXXXXrXFXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 115,
            "name": "运动外套男",
            "parentId": 4,
            "img": "https://gw.alicdn.com/imgextra/TB1YdaAOVXXXXciXVXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 116,
            "name": "呢大衣男",
            "parentId": 4,
            "img": "https://gw.alicdn.com/imgextra/TB1vzfhOFXXXXagapXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 117,
            "name": "棉衣男",
            "parentId": 4,
            "img": "https://gw.alicdn.com/imgextra/TB10nJDMpXXXXcmXVXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 118,
            "name": "羽绒服男",
            "parentId": 4,
            "img": "https://gw.alicdn.com/tps/TB1tH2XMVXXXXa_aXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },

        //5
        {
            "id": 119,
            "name": "保温杯壶",
            "parentId": 5,
            "img": "https://gw.alicdn.com/imgextra/i2/TB11hkgOXXXXXXiaFXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 120,
            "name": "玻璃杯",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1h6WbKFXXXXXSXFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 121,
            "name": "随手杯",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1JCmfKFXXXXbGXpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 122,
            "name": "碗盘",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1NXNQKFXXXXbZapXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 123,
            "name": "马克杯",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1LK5iKFXXXXalXpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 124,
            "name": "果盘果篮",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1yvumKFXXXXbfXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 125,
            "name": "茶具",
            "parentId": 5,
            "img": "https://gw.alicdn.com/imgextra/i3/TB1ruhIOVXXXXcyXFXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 126,
            "name": "保温饭盒",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1GyNTKFXXXXb_aXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 127,
            "name": "茶杯",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1HLt3KFXXXXcMXVXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 128,
            "name": "酒杯",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1.BihKFXXXXaBXpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 129,
            "name": "筷子",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1n.47KFXXXXXVXVXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 130,
            "name": "西餐具",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB19d0.KFXXXXa5XFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },


        {
            "id": 131,
            "name": "厨房置物架",
            "parentId": 5,
            "img": "https://gw.alicdn.com/imgextra/i1/2487279977/TB2h7K9dmFjpuFjSszhXXaBuVXa_!!2487279977.jpg_140x10000Q75.jpg"
        },
        {
            "id": 132,
            "name": "炒锅",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1MJakKFXXXXcMXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 133,
            "name": "调味瓶罐",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1gHekKFXXXXXyXpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 134,
            "name": "炖汤",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1q0OpKFXXXXXlXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 135,
            "name": "砧板",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB19b0_KFXXXXcvXFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 136,
            "name": "刀具套组",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1KraaKFXXXXapXFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 137,
            "name": "蒸锅",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1IpSXKFXXXXa7XFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 138,
            "name": "平底锅",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1OIikKFXXXXXmXpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 139,
            "name": "密封罐",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1t4BTKFXXXXXjapXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 140,
            "name": "锅组套装",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1aYulKFXXXXc1XXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 141,
            "name": "烘焙工具",
            "parentId": 5,
            "img": "https://gw.alicdn.com/imgextra/i3/T1K8pSXrhXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 142,
            "name": "压力锅",
            "parentId": 5,
            "img": "https://gw.alicdn.com/tps/TB1yIWkKFXXXXXQXpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },

        //7

        {
            "id": 143,
            "name": "女性饮品",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB1MVMCNVXXXXb1XpXXwu0bFXXX.png_140x10000.jpg"
        },
        {
            "id": 144,
            "name": "女人营养品",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB2RGJSi8TH8KJjy0FiXXcRsXXa_!!3419872638-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },
        {
            "id": 145,
            "name": "老人食材",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB1YGP_kKSSBuNjy0FlSuvBpVXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 146,
            "name": "女生茶饮",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB2Z2O4bBPzQeBjSZFLXXa3cXXa_!!0-dgshop.jpg_140x10000Q75.jpg"
        },
        {
            "id": 147,
            "name": "女性营养素",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB2GfwoXVXXXXagXXXXXXXXXXXX_!!1903212414-0-dgshop.jpg_140x10000Q75.jpg"
        },
        {
            "id": 148,
            "name": "中老年补钙",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB1v2IolhPI8KJjSspfSuwCFXXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 149,
            "name": "女神滋补品",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB1w1HgNFXXXXaLapXXXXXXXXXX_!!0-tejia.jpg_140x10000Q75.jpg"
        },
        {
            "id": 150,
            "name": "女神养颜",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB1aUj2lm_I8KJjy0FoSuuFnVXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 151,
            "name": "男人加油站",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB2INFgbmmK.eBjSZPfXXce2pXa_!!108-2-yamato.png_140x10000.jpg"
        },
        {
            "id": 152,
            "name": "妈妈私房菜",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB1gJoQOFXXXXXxaVXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 153,
            "name": "女性养生品",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB2hbUnf4PI8KJjSspfXXcCFXXa_!!2534582702-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },
        {
            "id": 154,
            "name": "老年营养品",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB1hCooNpXXXXa5XXXXwu0bFXXX.png_140x10000.jpg"
        },
        {
            "id": 155,
            "name": "女士养颜",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB1Ki3oNVXXXXaoXFXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 156,
            "name": "男生小零食",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB19TXNOpXXXXcgXpXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 157,
            "name": "宝妈零食",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB2_959a3CN.eBjSZFoXXXj0FXa_!!0-dgshop.jpg_140x10000Q75.jpg"
        },


        {
            "id": 158,
            "name": "膨化食品",
            "parentId": 7,
            "img": "https://gw.alicdn.com/imgextra/i4/TB14CEbKpXXXXXCXFXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 159,
            "name": "糖果",
            "parentId": 7,
            "img": "https://gw.alicdn.com/imgextra/i3/TB17b0yGXXXXXcbXVXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 160,
            "name": "饼干",
            "parentId": 7,
            "img": "https://gw.alicdn.com/imgextra/i1/TB1gI1SJFXXXXbjXVXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 161,
            "name": "牛肉干",
            "parentId": 7,
            "img": "https://gw.alicdn.com/imgextra/TB1AywpKpXXXXbGXXXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 162,
            "name": "薄皮核桃",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB1YIKgKFXXXXc.XpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 163,
            "name": "进口零食",
            "parentId": 7,
            "img": "https://gw.alicdn.com/imgextra/TB1tdueJFXXXXbHXFXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 164,
            "name": "肉松饼",
            "parentId": 7,
            "img": "https://gw.alicdn.com/tps/TB1k5ULKFXXXXb.XVXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 165,
            "name": "肉干肉脯",
            "parentId": 7,
            "img": "https://gw.alicdn.com/imgextra/i1/TB1bxkXOVXXXXXsaFXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 166,
            "name": "坚果",
            "parentId": 7,
            "img": "https://gw.alicdn.com/imgextra/i1/TB1XaQWKXXXXXbDXVXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 167,
            "name": "巧克力",
            "parentId": 7,
            "img": "https://gw.alicdn.com/imgextra/TB1FJLpJFXXXXbUXpXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 168,
            "name": "果干",
            "parentId": 7,
            "img": "https://gw.alicdn.com/imgextra/i1/TB1_OpGQXXXXXbWXpXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 169,
            "name": "鱿鱼丝",
            "parentId": 7,
            "img": "https://gw.alicdn.com/imgextra/TB1za_.KXXXXXaYXVXXSutbFXXX.jpg_140x10000Q75.jpg"
        },

        //8

        {
            "id": 170,
            "name": "洗衣机",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1C9aUKFXXXXbNaXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 171,
            "name": "平板电视",
            "parentId": 8,
            "img": "https://gw.alicdn.com/imgextra/TB1C5XKMpXXXXcPXXXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 172,
            "name": "空调",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1cnneKFXXXXapXpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 173,
            "name": "电热水器",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1Q2y6KFXXXXc0XFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 174,
            "name": "油烟机",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1p6uTKFXXXXbIaXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 175,
            "name": "燃气灶",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1Hn_mKFXXXXXMXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 176,
            "name": "电热水龙头",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB105GYKFXXXXXjaXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 177,
            "name": "燃气热水器",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1XPaYKFXXXXXFaXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 178,
            "name": "冷柜",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1Rmu8KFXXXXa1XFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 179,
            "name": "太阳能热水器",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1LN5VKFXXXXX9aXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 180,
            "name": "烟灶消套装",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB11cW2KFXXXXb.XVXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 181,
            "name": "消毒柜",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1ZR_nKFXXXXXfXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 182,
            "name": "集成灶",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1CjS.KFXXXXasXFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 183,
            "name": "厨宝",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1ULaYOXXXXXbyXFXXXXXXXXXX-360-360.jpg_140x10000Q75.jpg"
        },
        {
            "id": 184,
            "name": "洗碗机",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1.195KFXXXXXQXVXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 185,
            "name": "嵌入式电蒸箱",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB12GqROXXXXXcNXVXXXXXXXXXX-360-360.jpg_140x10000Q75.jpg"
        },
        {
            "id": 186,
            "name": "冰箱",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1_JG0KFXXXXc5XVXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 187,
            "name": "大家电配件",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1ahyMOXXXXXbuXVXXXXXXXXXX-360-360.jpg_140x10000Q75.jpg"
        },


        {
            "id": 188,
            "name": "电饭煲",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1HPPbKFXXXXcpXpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 189,
            "name": "电热水壶",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1Cb90KFXXXXXfaXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 190,
            "name": "电压力锅",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1C658KFXXXXa6XFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 191,
            "name": "电磁炉",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1zEvhKFXXXXcXXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 192,
            "name": "微波炉",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB16z9YKFXXXXXBaXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 193,
            "name": "饮水机",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1NBzbKFXXXXbAXpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 194,
            "name": "净水器",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1j_y7KFXXXXclXFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 195,
            "name": "榨汁机",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB18pLlKFXXXXarXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 196,
            "name": "豆浆机",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1_geQKFXXXXaPapXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 197,
            "name": "电烤箱",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1devnKFXXXXXrXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 198,
            "name": "面包机",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1dybkKFXXXXaSXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 199,
            "name": "展示柜",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1WWjXKFXXXXXHXFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 200,
            "name": "咖啡机",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1eG9.KFXXXXXJXFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 201,
            "name": "酸奶机",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1BweWKFXXXXagaXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 202,
            "name": "料理机",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB133O1KFXXXXcbXVXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 203,
            "name": "电饼铛",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB17Cu_KFXXXXcKXpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 204,
            "name": "养生壶",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB19juWKFXXXXaoaXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 205,
            "name": "电炖锅",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1qhYiKFXXXXckXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 206,
            "name": "煮蛋器",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1yX2bKFXXXXb7XpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 207,
            "name": "碎肉机",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1GKq.KFXXXXaaXFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 208,
            "name": "冷饮机",
            "parentId": 8,
            "img": "https://gw.alicdn.com/tps/TB1TaaZKFXXXXXEaXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },

        //9
        {
            "id": 300,
            "name": "面部护理套装",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB17LNJuBjTBKNjSZFNSuusFXXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 301,
            "name": "唇膏/口红",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB2Wc_LXlLN8KJjSZFpXXbZaVXa_!!2656340665-0-daren.jpg_140x10000Q75.jpg"
        },
        {
            "id": 302,
            "name": "面膜",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB2cgjNeH_0UKFjy1XaXXbKfXXa_!!0-juitemmedia.jpg_140x10000Q75.jpg"
        },
        {
            "id": 303,
            "name": "眼影",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/O1CN01SqADuL21gSTn1iOLe_!!2244037014-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },
        {
            "id": 304,
            "name": "乳液/面霜",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB1U7gel46I8KJjy0FgSutXzVXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 305,
            "name": "香水",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB1Z.daIXXXXXaJXpXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 306,
            "name": "BB霜",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB2zIc0dsjI8KJjSsppXXXbyVXa_!!647118035-0-daren.jpg_140x10000Q75.jpg"
        },
        {
            "id": 307,
            "name": "洁面",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB2emTXdPgy_uJjSZPxXXanNpXa_!!3170160060-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },
        {
            "id": 308,
            "name": "化妆/美容工具",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB1poXaexPI8KJjSspoSut6MFXa.jpg_140x10000Q75.jpg"
        },

        {
            "id": 400,
            "name": "女神美妆",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB2aH6EXGi5V1BjSspmXXXlwpXa_!!1836451825.jpg_140x10000Q75.jpg"
        },
        {
            "id": 401,
            "name": "女神的新年",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB2AFExXa3PyuJjy1zkXXcjRFXa_!!2005968873.png_140x10000.jpg"
        },
        {
            "id": 402,
            "name": "打造美少女",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB1TKgcOpXXXXclaXXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 403,
            "name": "女式护理品",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB276fftpXXXXafXXXXXXXXXXXX_!!355148698.jpg_140x10000Q75.jpg"
        },
        {
            "id": 404,
            "name": "女人扶肤品",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB2WbI8eBjTBKNjSZFwXXcG4XXa_!!1929793301-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },
        {
            "id": 405,
            "name": "女生过年妆",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB2qXxvchsIL1JjSZFqXXceCpXa_!!178301992.jpg_140x10000Q75.jpg"
        },
        {
            "id": 406,
            "name": "型男护肤",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB1SzOnmcnI8KJjSsziSuv8QpXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 407,
            "name": "仙女化妆品",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB1rR2nbAT85uJjSZFgSuwZvVXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 408,
            "name": "妈咪美肤",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB2whu8cVXXXXa1XXXXXXXXXXXX_!!1944392113-0-dgshop.jpg_140x10000Q75.jpg"
        },
        {
            "id": 409,
            "name": "男士去体味",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/O1CN01LSEMt31mNTpun9cQH_!!2627534942-0-daren.jpg_140x10000Q75.jpg"
        },
        {
            "id": 410,
            "name": "新香女人味",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB2BNy6cduO.eBjSZFCXXXULFXa_!!115-2-yamato.png_140x10000.jpg"
        },
        {
            "id": 411,
            "name": "少女妆用品",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB2OWieaqY85uJjSZFjXXb2VVXa_!!273941874-2-beehive-scenes.png_140x10000.jpg"
        },
        {
            "id": 412,
            "name": "速变女神",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB1BnZ_tY1YBuNjSszeSuublFXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 413,
            "name": "懒女神",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB190GsOpXXXXaXaXXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 414,
            "name": "女神妆容",
            "parentId": 9,
            "img": "https://gw.alicdn.com/tps/TB1SD_sXCrqK1RjSZK9SutyypXa.jpg_140x10000Q75.jpg"
        },

        //10

        {
            "id": 500,
            "name": "内裤",
            "parentId": 10,
            "img": "https://gw.alicdn.com/tps/TB1cj0DpL9TBuNjy1zbSutpepXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 501,
            "name": "文胸",
            "parentId": 10,
            "img": "https://gw.alicdn.com/tps/O1CN01qD2nYO22FizL5NVCa_!!2131997091-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },
        {
            "id": 502,
            "name": "睡衣/家居服套装",
            "parentId": 10,
            "img": "https://gw.alicdn.com/tps/TB1IodXliAKL1JjSZFoSuugCFXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 503,
            "name": "发饰",
            "parentId": 10,
            "img": "https://gw.alicdn.com/tps/TB1Z.nUb7zoK1RjSZFlSuui4VXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 504,
            "name": "文胸套装",
            "parentId": 10,
            "img": "https://gw.alicdn.com/tps/TB1ZgPsCXGWBuNjy0FbSuv4sXXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 505,
            "name": "耳环",
            "parentId": 10,
            "img": "https://gw.alicdn.com/tps/TB1DixRQVXXXXbxaXXXwu0bFXXX.png_140x10000.jpg"
        },
        {
            "id": 506,
            "name": "睡裙",
            "parentId": 10,
            "img": "https://gw.alicdn.com/tps/TB1D4E7aiLaK1RjSZFxSuumPFXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 507,
            "name": "短袜/打底袜/丝袜/美腿袜",
            "parentId": 10,
            "img": "https://gw.alicdn.com/tps/TB2_fdlwBNkpuFjy0FaXXbRCVXa_!!0-juitemmedia.jpg_140x10000Q75.jpg"
        },
        {
            "id": 508,
            "name": "帽子",
            "parentId": 10,
            "img": "https://gw.alicdn.com/tps/O1CN0141jLml2BLWXDnaYij_!!4033208322-0-daren.jpg_140x10000Q75.jpg"
        },


        {
            "id": 600,
            "name": "耳环",
            "parentId": 10,
            "img": "https://gw.alicdn.com/imgextra/i4/TB1vYqVGVXXXXXFXXXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 602,
            "name": "手链",
            "parentId": 10,
            "img": "https://gw.alicdn.com/imgextra/i2/28406760/TB29bilXm8mpuFjSZFMXXaxpVXa_!!28406760.jpg_140x10000Q75.jpg"
        },
        {
            "id": 603,
            "name": "戒指",
            "parentId": 10,
            "img": "https://gw.alicdn.com/imgextra/i1/TB15UFGHpXXXXc3aXXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 604,
            "name": "耳钉",
            "parentId": 10,
            "img": "https://gw.alicdn.com/imgextra/i3/16602030017307505/T1gv12Fn4cXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 605,
            "name": "手镯",
            "parentId": 10,
            "img": "https://gw.alicdn.com/imgextra/i1/1731320338/TB2RFYngwRkpuFjy1zeXXc.6FXa_!!1731320338.jpg_140x10000Q75.jpg"
        },
        {
            "id": 606,
            "name": "吊坠",
            "parentId": 10,
            "img": "https://gw.alicdn.com/imgextra/i2/TB1d0dmOVXXXXXIXpXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 607,
            "name": "耳夹",
            "parentId": 10,
            "img": "https://gw.alicdn.com/imgextra/i1/TB1VQgVLVXXXXaaaXXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 608,
            "name": "脚链",
            "parentId": 10,
            "img": "https://gw.alicdn.com/imgextra/i3/TB17vpcHFXXXXXoXXXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 609,
            "name": "首饰盒",
            "parentId": 10,
            "img": "https://gw.alicdn.com/imgextra/i4/TB1yrTfHVXXXXaZXpXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 610,
            "name": "胸针",
            "parentId": 10,
            "img": "https://gw.alicdn.com/imgextra/i3/160555077/TB2KsY0XOGO.eBjSZFpXXb3tFXa_!!160555077.jpg_140x10000Q75.jpg"
        },
        {
            "id": 611,
            "name": "佛珠",
            "parentId": 10,
            "img": "https://gw.alicdn.com/imgextra/i2/12367026945019540/T1GapzFXXfXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 612,
            "name": "手串",
            "parentId": 10,
            "img": "https://gw.alicdn.com/imgextra/i4/TB1aqGaJVXXXXbxXFXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 613,
            "name": "头绳",
            "parentId": 10,
            "img": "https://gw.alicdn.com/tps/TB1j2hlKFXXXXawXFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 614,
            "name": "发夹",
            "parentId": 10,
            "img": "https://gw.alicdn.com/imgextra/i1/TB1aiZkIpXXXXcEXVXXXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },

        //12

        {
            "id": 700,
            "name": "套装",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB26n1Oh5lnpuFjSZFgXXbi7FXa_!!2449510680.png_140x10000.jpg"
        },
        {
            "id": 701,
            "name": "普通外套",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/O1CN01vkOT462Fkx0TnMF6k_!!3511368919-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },
        {
            "id": 702,
            "name": "裤子",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/O1CN01w17zxh1eowg1JvD7B_!!2256803919-0-daren.jpg_140x10000Q75.jpg"
        },
        {
            "id": 703,
            "name": "连衣裙",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB10w9JzrvpK1RjSZFqSuwXUVXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 704,
            "name": "连身衣/爬服/哈衣",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB1QY4BpASWBuNjSszdSuveSpXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 705,
            "name": "运动鞋",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB16aBkg.RIWKJjSZFgSuvoxXXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 706,
            "name": "卫衣/绒衫",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB1kbD8jVzqK1RjSZFvSuwB7VXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 707,
            "name": "棉袄/棉服",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB158eUncrI8KJjy0FhSuvfnpXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 708,
            "name": "毛衣/针织衫",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/O1CN011ZHtzf6ShGtgM5H_!!3818963170-0-daren.jpg_140x10000Q75.jpg"
        },


        {
            "id": 800,
            "name": "女宝专用",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB1mnFCldnJ8KJjSszdSuuxuFXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 801,
            "name": "宝宝专属",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB2qhDrqVXXXXb1XXXXXXXXXXXX_!!2420813598.jpg_140x10000Q75.jpg"
        },
        {
            "id": 802,
            "name": "宝宝护肤膏",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB2bYmud94mpuFjSZFOXXaUqpXa_!!2771494819-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },
        {
            "id": 803,
            "name": "宝宝玩乐",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB12koNXrvpK1RjSZPiSuvmwXXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 804,
            "name": "宝宝清洁品",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB26LJdGFGWBuNjy0FbXXb4sXXa_!!2262741421-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },
        {
            "id": 805,
            "name": "女童家居",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB2veklbXXXXXbeXpXXXXXXXXXX_!!671258059.jpg_140x10000Q75.jpg"
        },
        {
            "id": 806,
            "name": "男中童冬装",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB2L0N8XxjaK1RjSZFAXXbdLFXa_!!49-0-luban.jpg_140x10000Q75.jpg"
        },
        {
            "id": 807,
            "name": "宝宝益智品",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB2ctORjkfb_uJjSsrbXXb6bVXa_!!2413132940.png_140x10000.jpg"
        },
        {
            "id": 808,
            "name": "宝妈的选择",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB2cM9fo3JkpuFjSszcXXXfsFXa_!!2867492502.png_140x10000.jpg"
        },
        {
            "id": 809,
            "name": "孕妈辅助",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB2egYoqFXXXXatXXXXXXXXXXXX_!!0-dgshop.jpg_140x10000Q75.jpg"
        },
        {
            "id": 810,
            "name": "宝宝襁褓巾",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB1XbjKaIuYBuNkSmRySuwA3pXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 811,
            "name": "儿童箱包",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB1EXd_aNSYBuNjSsphSuvGvVXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 812,
            "name": "宝宝有话说",
            "parentId": 12,
            "img": "https://gw.alicdn.com/tps/TB2KxaiqFXXXXX8XpXXXXXXXXXX_!!70591123.jpg_140x10000Q75.jpg"
        },

        //13

        {
            "id": 900,
            "name": "新势力周",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tfs/TB1aORXQVXXXXaRaXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 901,
            "name": "上新",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i1/TB1f0R2MpXXXXXHXXXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 902,
            "name": "斜挎包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/imgextra/TB1O27lOVXXXXauapXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 903,
            "name": "单肩包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i3/TB1dspJMpXXXXa6XFXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 904,
            "name": "迷你包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/imgextra/TB10jHVPVXXXXcgXVXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 905,
            "name": "手提包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i4/TB1XkxWMpXXXXb9XXXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 906,
            "name": "真皮女包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i2/TB11J4CMpXXXXbdXVXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 907,
            "name": "帆布包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i4/TB1iLxyMpXXXXaiaXXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 908,
            "name": "中年女包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i2/TB1k88vMpXXXXaPaXXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 909,
            "name": "小方包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/imgextra/TB1UQypPpXXXXaraXXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 910,
            "name": "托特包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/imgextra/TB1OcLPOXXXXXaYapXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 911,
            "name": "水桶包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/imgextra/TB1w5bvOFXXXXXFXVXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 912,
            "name": "马鞍包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i1/TB11RFuMpXXXXbpaXXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 913,
            "name": "贝壳包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/imgextra/TB1f2AMOpXXXXaPXVXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 914,
            "name": "菱格链条包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i4/TB1vEdZMpXXXXbeXXXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 915,
            "name": "小猫包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i1/TB1yVRZMpXXXXbDXXXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 916,
            "name": "杀手包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i1/TB1b68MMpXXXXcvXpXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 917,
            "name": "邮差包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i4/TB1GApLMpXXXXXqXFXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 918,
            "name": "饺子包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i1/TB1VCBZMpXXXXX7XXXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 919,
            "name": "机车包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i2/TB1cjVOMpXXXXbJXpXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 920,
            "name": "戴妃包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i3/TB17KNYMpXXXXbUXXXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 921,
            "name": "笑脸包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i1/TB186JUMpXXXXc2XXXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 922,
            "name": "翅膀包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i3/TB1dwtHMpXXXXbSXFXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 923,
            "name": "铂金包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i2/TB1qs4yMpXXXXXGaXXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 924,
            "name": "凯莉包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i4/TB1Wl8wMpXXXXX_aXXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 925,
            "name": "新月包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i3/TB1FmB1MpXXXXXMXXXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 926,
            "name": "医生包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i1/TB1U8dJMpXXXXaVXFXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 927,
            "name": "小猪包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i4/TB1E98BMpXXXXbzXVXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 928,
            "name": "风琴包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i2/TB1wsFBMpXXXXa_XVXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 929,
            "name": "几何包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i3/TB12MpCMpXXXXbgXVXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 930,
            "name": "小圆包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i4/TB1eMJBMpXXXXbOXVXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 931,
            "name": "盒子包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i3/TB1q3xSMpXXXXXEXpXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 932,
            "name": "子母包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i1/TB1t2t1MpXXXXX.XXXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 933,
            "name": "流苏包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i2/TB17L0WMpXXXXchXXXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 934,
            "name": "撞色包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i3/TB1TIt3MpXXXXXlXXXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 935,
            "name": "徽章包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i2/TB1hvBCMpXXXXa7XVXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 936,
            "name": "金属装饰包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i1/TB1KD4PMpXXXXa4XpXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 937,
            "name": "动物纹包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i3/TB1Ui4RMpXXXXaXXpXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 938,
            "name": "果冻包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i2/TB1MoXPMpXXXXaoXpXXKqwKQVXX-375-375.png_140x10000.jpg"
        },
        {
            "id": 939,
            "name": "立体花朵包",
            "parentId": 13,
            "img": "https://gw.alicdn.com/tps/i3/TB1h34HMpXXXXbpXFXXKqwKQVXX-375-375.png_140x10000.jpg"
        },

        //14


        {
            "id": 1000,
            "name": "实木床",
            "parentId": 14,
            "img": "https://gw.alicdn.com/tps/TB2YDx6feuSBuNjSsplXXbe8pXa_!!2937175307-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1001,
            "name": "布艺沙发",
            "parentId": 14,
            "img": "https://gw.alicdn.com/tps/TB1ywTmzuuSBuNjSsziSuvq8pXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1002,
            "name": "餐桌",
            "parentId": 14,
            "img": "https://gw.alicdn.com/tps/TB29zXAbP7jyKJjy1XaXXblnFXa_!!2260433989.png_140x10000.jpg"
        },
        {
            "id": 1003,
            "name": "衣柜",
            "parentId": 14,
            "img": "https://gw.alicdn.com/tps/TB1qSKmahTpK1RjSZFKSuu2wXXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1004,
            "name": "茶几",
            "parentId": 14,
            "img": "https://gw.alicdn.com/tps/TB1yUoOAL5TBuNjSspcSuvnGFXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1005,
            "name": "懒人沙发",
            "parentId": 14,
            "img": "https://gw.alicdn.com/tps/TB2131wlY4npuFjSZFmXXXl4FXa_!!2298452181.png_140x10000.jpg"
        },
        {
            "id": 1006,
            "name": "电视柜",
            "parentId": 14,
            "img": "https://gw.alicdn.com/tps/TB1E8AtaXzqK1RjSZFvSuwB7VXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1007,
            "name": "搁板/置物架",
            "parentId": 14,
            "img": "https://gw.alicdn.com/tps/TB2F5.hdrZnBKNjSZFrXXaRLFXa_!!3372803017-0-daren.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1008,
            "name": "实木沙发",
            "parentId": 14,
            "img": "https://gw.alicdn.com/tps/TB1bCjAkkPoK1RjSZKbSut1IXXa.jpg_140x10000Q75.jpg"
        },


        {
            "id": 1100,
            "name": "床品四件套",
            "parentId": 15,
            "img": "https://gw.alicdn.com/imgextra/i4/12000027311687009/T1QzWuFc4gXXXXXXXX_!!0-item_pic.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1101,
            "name": "床垫",
            "parentId": 15,
            "img": "https://gw.alicdn.com/tps/TB19oyjKFXXXXckXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1102,
            "name": "床褥",
            "parentId": 15,
            "img": "https://gw.alicdn.com/tps/TB11CCyNpXXXXbkXFXXXXXXXXXX-350-350.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1103,
            "name": "床单",
            "parentId": 15,
            "img": "https://gw.alicdn.com/tps/TB13L67MVXXXXXCXpXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1104,
            "name": "枕头枕芯",
            "parentId": 15,
            "img": "https://gw.alicdn.com/tps/TB178QcMVXXXXXRXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1105,
            "name": "春秋被",
            "parentId": 15,
            "img": "https://gw.alicdn.com/tps/TB1r543KFXXXXapXVXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1106,
            "name": "蚕丝被",
            "parentId": 15,
            "img": "https://gw.alicdn.com/tps/TB172R_KFXXXXbfXFXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1107,
            "name": "床裙",
            "parentId": 15,
            "img": "https://gw.alicdn.com/tps/TB1syqSNpXXXXXMXXXXXXXXXXXX-350-350.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1108,
            "name": "蚊帐",
            "parentId": 15,
            "img": "https://gw.alicdn.com/tps/TB1Td5jKFXXXXb0XXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1109,
            "name": "床幔",
            "parentId": 15,
            "img": "https://gw.alicdn.com/tps/TB1GaynNpXXXXbFXVXXXXXXXXXX-350-350.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1110,
            "name": "羽绒被",
            "parentId": 15,
            "img": "https://gw.alicdn.com/tps/TB1oAvYMVXXXXaXXVXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1111,
            "name": "床罩",
            "parentId": 15,
            "img": "https://gw.alicdn.com/tps/TB145ieNpXXXXbraXXXXXXXXXXX-350-350.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1112,
            "name": "儿童床品",
            "parentId": 15,
            "img": "https://gw.alicdn.com/tps/TB1vaqhKFXXXXc8XXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1113,
            "name": "凉席",
            "parentId": 15,
            "img": "https://gw.alicdn.com/tps/TB1Y9lVKFXXXXakaXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1114,
            "name": "婚庆床品",
            "parentId": 15,
            "img": "https://gw.alicdn.com/tps/TB1.BgaMVXXXXaAXXXXXXXXXXXX-375-375.jpg_140x10000Q75.jpg"
        },

        //17


        {
            "id": 1200,
            "name": "男子健身",
            "parentId": 17,
            "img": "https://gw.alicdn.com/tps/TB2rdaUdvBNTKJjy1zdXXaScpXa_!!789423716-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1201,
            "name": "女用健身",
            "parentId": 17,
            "img": "https://gw.alicdn.com/tps/TB10aYGkDdYBeNkSmLySutfnVXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1202,
            "name": "男士减肚腩",
            "parentId": 17,
            "img": "https://gw.alicdn.com/tps/TB2KEkjjB0lpuFjSszdXXcdxFXa_!!1093713845.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1203,
            "name": "女生瘦身",
            "parentId": 17,
            "img": "https://gw.alicdn.com/tps/TB1aue0PFXXXXboXpXXSutbFXXX.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1204,
            "name": "女生健身",
            "parentId": 17,
            "img": "https://gw.alicdn.com/tps/TB1eOPedxjaK1RjSZKzSutVwXXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1205,
            "name": "男子跑步",
            "parentId": 17,
            "img": "https://gw.alicdn.com/tps/TB15xyMXr1YBuNjSszhSuwUsFXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1206,
            "name": "男士训练服",
            "parentId": 17,
            "img": "https://gw.alicdn.com/tps/TB2nQ3chlNkpuFjy0FaXXbRCVXa_!!0-juitemmedia.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1207,
            "name": "女子训练",
            "parentId": 17,
            "img": "https://gw.alicdn.com/tps/TB1tGEUc2BNTKJjSszbSuuFrFXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1208,
            "name": "型男场所",
            "parentId": 17,
            "img": "https://gw.alicdn.com/tps/TB2AoYVjOpnpuFjSZFkXXc4ZpXa_!!0-juitemmedia.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1209,
            "name": "女子瑜伽",
            "parentId": 17,
            "img": "https://gw.alicdn.com/tps/TB2macGtFXXXXchXXXXXXXXXXXX_!!0-dgshop.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1210,
            "name": "女子跑步",
            "parentId": 17,
            "img": "https://gw.alicdn.com/tps/TB1LA7pvnqWBKNjSZFASuunSpXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1211,
            "name": "女生运动",
            "parentId": 17,
            "img": "https://gw.alicdn.com/tps/TB2rMR0vGQoBKNjSZJnXXaw9VXa_!!22-0-luban.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1212,
            "name": "女子健身",
            "parentId": 17,
            "img": "https://gw.alicdn.com/tps/TB1VQTPdTlYBeNjSszcSuvwhFXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1213,
            "name": "男运动健身",
            "parentId": 17,
            "img": "https://gw.alicdn.com/tps/TB1HMJ9dY1YBuNjSszhSuwUsFXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1214,
            "name": "女士塑形",
            "parentId": 17,
            "img": "https://gw.alicdn.com/tps/TB2LLtsspXXXXcBXpXXXXXXXXXX_!!0-dgshop.jpg_140x10000Q75.jpg"
        },

        //18

        {
            "id": 1300,
            "name": "国产腕表",
            "parentId": 18,
            "img": "https://gw.alicdn.com/tps/TB2sGo6wXkoBKNjSZFkXXb4tFXa_!!167-0-luban.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1301,
            "name": "手饰",
            "parentId": 18,
            "img": "https://gw.alicdn.com/tps/TB2PtLHBKSSBuNjy0FlXXbBpVXa_!!1709365317-0-daren.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1302,
            "name": "欧美腕表",
            "parentId": 18,
            "img": "https://gw.alicdn.com/tps/TB1Qb4OdQyWBuNjy0FpSuussXXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1303,
            "name": "瑞士腕表",
            "parentId": 18,
            "img": "https://gw.alicdn.com/tps/TB2Gpx5fwKTBuNkSne1XXaJoXXa_!!720824198-0-beehive-scenes.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1304,
            "name": "颈饰",
            "parentId": 18,
            "img": "https://gw.alicdn.com/tps/TB1gl2SmBHH8KJjy0FbSuwqlpXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1305,
            "name": "日韩腕表",
            "parentId": 18,
            "img": "https://gw.alicdn.com/tps/TB2I_yWdduO.eBjSZFCXXXULFXa_!!2421503542.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1306,
            "name": "太阳眼镜",
            "parentId": 18,
            "img": "https://gw.alicdn.com/tps/TB1lb2osf1TBuNjy0FjSuujyXXa.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1307,
            "name": "手饰",
            "parentId": 18,
            "img": "https://gw.alicdn.com/tps/TB2mTCjvHuWBuNjSszgXXb8jVXa_!!1586185912-0-daren.jpg_140x10000Q75.jpg"
        },
        {
            "id": 1308,
            "name": "手饰",
            "parentId": 18,
            "img": "https://gw.alicdn.com/tps/TB25WOBHbGYBuNjy0FoXXciBFXa_!!1935848496-0-beehive-scenes.jpg_140x10000Q75.jpg"
        }




    ];

    await models.category.bulkCreate(data);

    await models.user.bulkCreate([{
        id: 1,
        phone: '13686004518',
        password: '123456',
        // avatar: 'https://avatars0.githubusercontent.com/u/15243456?s=460&v=4',
        nickname: 'gibsonxiong'
    }]);

    await models.propname.bulkCreate([{
        id: 1,
        name: '颜色分类'
    }, {
        id: 2,
        name: '尺码'
    }, {
        id: 3,
        name: '规格'
    }]);

    await models.propvalue.bulkCreate([{
            id: 1,
            propnameId: 1,
            name: '默认',
        },
        {
            id: 2,
            propnameId: 1,
            name: '红色'
        },
        {
            id: 3,
            propnameId: 1,
            name: '白色'
        },
        {
            id: 4,
            propnameId: 2,
            name: 'S'
        },
        {
            id: 5,
            propnameId: 2,
            name: 'M'
        },
        {
            id: 6,
            propnameId: 2,
            name: 'L'
        }, {
            id: 7,
            propnameId: 3,
            name: '小'
        },
        {
            id: 8,
            propnameId: 3,
            name: '大'
        }
    ]);

    await models.item.bulkCreate([{
            id: 1,
            name: '法式少女茶歇裙春秋装2019新款收腰复古桔梗裙法国小众连衣裙长裙',
            desc: '小仙女专属',
            categoryId: 23,
            imgList: 'http://img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8zXvIMUYrx_!!2296669517.jpg,http:////img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8xJFj4YeHo_!!2296669517.jpg,http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8xJFj4YeHo_!!2296669517.jpg',
            propvalueList: '1:2,3|2:4,5,6|3:7,8',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },
        {
            "id": 2,
            "name": "sunday seoul / 法式浪漫 镂空蕾丝小碎花梦幻网纱无袖背心连衣裙",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i1/1030765146/TB26JzlyeOSBuNjy0FdXXbDnVXa_!!1030765146.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/1030765146/TB2sZ_xyb5YBuNjSspoXXbeNFXa_!!1030765146.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/1030765146/TB2r4_JyeySBuNjy1zdXXXPxFXa_!!1030765146.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/1030765146/TB2zJTgyXOWBuNjy0FiXXXFxVXa_!!1030765146.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/1030765146/TB25bHnyeSSBuNjy0FlXXbBpVXa_!!1030765146.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/1030765146/TB26JzlyeOSBuNjy0FdXXbDnVXa_!!1030765146.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/1030765146/TB2sZ_xyb5YBuNjSspoXXbeNFXa_!!1030765146.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div> &nbsp;</div> <div>  <p style=\"color:#000000;text-align:center;\"><img alt=\"\" src=\"//img.alicdn.com/imgextra/i2/1030765146/TB2f5IhX5ERMeJjSspjXXcpOXXa_!!1030765146.jpg\" size=\"750x496\"></p>  <p style=\"color:#000000;text-align:center;\">&nbsp;</p>  <p style=\"color:#000000;text-align:center;\">&nbsp;</p>  <p style=\"color:#000000;text-align:center;\">&nbsp;</p>  <p style=\"color:#000000;text-align:center;\"><span style=\"font-family:georgia;\"><span style=\"font-size:25.6px;\"><strong>Halo sunday</strong></span></span></p>  <p style=\"color:#000000;text-align:center;\"><span style=\"font-family:georgia;\">ID:<u>&nbsp;201708-12</u></span></p>  <p style=\"color:#000000;text-align:center;\"><span style=\"line-height:1.5;\">once in a blue moon，</span></p>  <p style=\"color:#000000;text-align:center;\">&nbsp;</p>  <p style=\"color:#000000;text-align:center;\">&nbsp;</p>  <p style=\"color:#000000;text-align:center;\"><strong><span style=\"font-family:georgia;\"><span style=\"color:#0b5394;\"><u>COORDI &nbsp;ITEM&nbsp;</u><span style=\"color:#000000;\">click the pics</span></span></span></strong></p>  <p style=\"color:#000000;text-align:center;\">&nbsp;</p>  <p style=\"color:#000000;text-align:center;\">&nbsp;</p>  <p style=\"color:#000000;text-align:center;\">&nbsp;</p>  <p style=\"color:#000000;text-align:center;\">&nbsp;</p>  <p style=\"color:#000000;text-align:center;\"><img alt=\"\" src=\"//img.alicdn.com/imgextra/i4/1030765146/TB2EtvvXgvGK1Jjy0FhXXcgiXXa_!!1030765146.jpg\" style=\"float:none;margin:0px;\" size=\"750x50\"></p>  <p style=\"color:#000000;text-align:center;\">&nbsp;</p>  <p style=\"color:#000000;text-align:center;\">&nbsp;</p>  <p style=\"color:#000000;text-align:center;\"><span style=\"font-size:9.6px;\"><strong><span style=\"font-family:georgia;\">Descript Info</span></strong></span></p>  <p style=\"color:#000000;text-align:center;\"><span style=\"background-color:#93c47d;\"><span style=\"background-color:#f4cccc;\">&nbsp; size &nbsp;<span style=\"background-color:#ffffff;\">&nbsp;&nbsp;</span></span></span>&nbsp;S 衣长104 &nbsp;胸围92 &nbsp;腰围66 &nbsp;肩宽35 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style=\"background-color:#93c47d;\"><span style=\"background-color:#f4cccc;\"><span style=\"background-color:#ffffff;\"> </span></span></span></p>  <p style=\"margin-top:1.12em;margin-bottom:1.12em;color:#000000;text-align:center;\"><span style=\"background-color:#93c47d;\"><span style=\"background-color:#f4cccc;\"><span style=\"background-color:#ffffff;\"><span>&nbsp; M 衣长105 &nbsp;胸围94 &nbsp;腰围68 &nbsp;肩宽36&nbsp;</span></span></span></span></p>  <p>&nbsp;</p>  <p style=\"color:#000000;text-align:center;\">*均为人工手量，有1-4cm左右误差属正常。</p>  <p style=\"color:#000000;font-size:6.4px;text-align:center;\">&nbsp;</p>  <p style=\"color:#000000;font-size:6.4px;text-align:center;\"><span style=\"font-size:7.466666666666667px;\"><span style=\"background-color:#93c47d;\"><span style=\"background-color:#f4cccc;\">&nbsp; fabric &nbsp;</span></span><span style=\"background-color:#ffffff;\">&nbsp; &nbsp;蕾丝</span></span></p>  <p style=\"color:#000000;text-align:center;\">&nbsp;</p>  <p style=\"color:#000000;text-align:center;\">&nbsp;</p>  <p style=\"color:#000000;text-align:center;\">shopping tips -&nbsp;<span style=\"line-height:1.5;\">店铺默认汇通 发顺丰联系客服</span><span style=\"line-height:1.5;\">&nbsp;</span></p>  <p style=\"color:#000000;text-align:center;\">*牛仔及深色衣物洗涤如有掉色属自然现象，为防止染色请单独洗涤。</p>  <p style=\"color:#000000;text-align:center;\"><span style=\"color:#000000;text-align:center;\">所有商品建议手洗 切勿浸泡或机洗</span></p>  <p style=\"color:#000000;text-align:center;\">*每台电子产品显示器不同 会出现些微色差属正常现象 介意勿拍。</p>  <p style=\"color:#000000;text-align:center;\">&nbsp;</p>  <div style=\"color:#000000;\">   <p style=\"text-align:center;\">&nbsp;</p>   <p style=\"text-align:center;\">workingtime：9：00 - 24：00</p>   <p style=\"text-align:center;\">（请在客服在线时间联系，非上班时间无人回复<span style=\"line-height:1.5;\">哦</span><span style=\"line-height:1.5;\">）</span></p>   <div style=\"text-align:center;\">   &nbsp;  </div>   <p style=\"text-align:center;\">&nbsp;</p>   <p style=\"text-align:center;\"><img alt=\"\" src=\"//img.alicdn.com/imgextra/i4/1030765146/TB2EtvvXgvGK1Jjy0FhXXcgiXXa_!!1030765146.jpg\" style=\"float:none;margin:0px;\" size=\"750x50\"></p>   <p style=\"text-align:center;\">&nbsp; &nbsp;&nbsp;</p>   <p style=\"text-align:center;\">&nbsp; &nbsp;&nbsp;</p>   <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/1030765146/TB26JzlyeOSBuNjy0FdXXbDnVXa_!!1030765146.jpg\" style=\"max-width:400px;\" size=\"700x700\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/1030765146/TB23PKMyhSYBuNjSsphXXbGvVXa_!!1030765146.jpg\" style=\"max-width:400px;\" size=\"700x700\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/1030765146/TB25bHnyeSSBuNjy0FlXXbBpVXa_!!1030765146.jpg\" style=\"max-width:400px;\" size=\"700x700\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/1030765146/TB2W8jsyb1YBuNjSszeXXablFXa_!!1030765146.jpg\" style=\"max-width:400px;\" size=\"700x700\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/1030765146/TB2cj15yeGSBuNjSspbXXciipXa_!!1030765146.jpg\" style=\"max-width:400px;\" size=\"700x700\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/1030765146/TB2zJTgyXOWBuNjy0FiXXXFxVXa_!!1030765146.jpg\" style=\"max-width:400px;\" size=\"700x700\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/1030765146/TB2HBQfymBYBeNjy0FeXXbnmFXa_!!1030765146.jpg\" style=\"max-width:400px;\" size=\"700x700\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/1030765146/TB2r4_JyeySBuNjy1zdXXXPxFXa_!!1030765146.jpg\" style=\"max-width:400px;\" size=\"700x700\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/1030765146/TB2ldzGykOWBuNjSsppXXXPgpXa_!!1030765146.jpg\" style=\"max-width:400px;\" size=\"700x700\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/1030765146/TB2dPrEyoR1BeNjy0FmXXb0wVXa_!!1030765146.jpg\" style=\"max-width:400px;\" size=\"700x700\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i2/1030765146/TB2jbU.ymtYBeNjSspaXXaOOFXa_!!1030765146.jpg\" style=\"max-width:400px;\" size=\"700x700\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/1030765146/TB2ELUSyamWBuNjy1XaXXXCbXXa_!!1030765146.jpg\" style=\"max-width:400px;\" size=\"700x700\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/1030765146/TB2Zk2syb1YBuNjSszeXXablFXa_!!1030765146.jpg\" style=\"max-width:400px;\" size=\"700x700\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/1030765146/TB2Kjq5yeGSBuNjSspbXXciipXa_!!1030765146.jpg\" style=\"max-width:400px;\" size=\"700x700\"></p>  </div> </div>"
        },
        {
            "id": 3,
            "name": "自制 英伦风复古 简单斗篷两件套连衣裙",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i4/408034679/O1CN01JkUISp1kR1gySfWBu_!!408034679.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/408034679/O1CN01JkUISp1kR1gySfWBu_!!408034679.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/408034679/O1CN01JkUISp1kR1gySfWBu_!!408034679.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<p>&nbsp;</p> <div class=\"dm_module\" data-id=\"6588800\" data-title=\"一概\" id=\"ids-module-6588800\">  <div>   <p style=\"text-align:center;\"><img alt=\"\" src=\"//img.alicdn.com/imgextra/i4/408034679/TB2_B7FblLN8KJjSZFPXXXoLXXa_!!408034679.jpg\" size=\"709x553\"></p>   <p style=\"text-align:center;\"><img alt=\"\" src=\"//img.alicdn.com/imgextra/i2/408034679/TB2W3J9ggNlpuFjy0FfXXX3CpXa_!!408034679.jpg\" size=\"709x553\"></p>   <p style=\"text-align:center;\"><img alt=\"\" src=\"//img.alicdn.com/imgextra/i4/408034679/TB2mMUuhypnpuFjSZFIXXXh2VXa_!!408034679.jpg\" size=\"709x283\"><img alt=\"\" src=\"//img.alicdn.com/imgextra/i4/408034679/TB2ZreOgmJjpuFjy0FdXXXmoFXa_!!408034679.jpg\" size=\"654x20\"></p>   <p style=\"text-align:center;\">&nbsp;</p>   <p style=\"text-align:center;\">&nbsp;</p>   <p style=\"text-align:center;\">&nbsp;</p>   <p style=\"text-align:center;\">&nbsp;</p>   <p style=\"text-align:center;\"><img alt=\"\" src=\"//img.alicdn.com/imgextra/i1/408034679/TB2CpImr1J8puFjy1XbXXagqVXa_!!408034679.jpg\" size=\"428x87\"></p>   <p style=\"text-align:center;\">&nbsp;</p>   <p style=\"text-align:center;\">&nbsp;</p>   <p style=\"text-align:center;\">&nbsp;</p>   <p style=\"text-align:center;\">&nbsp;</p>  </div> </div> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <div class=\"dm_module\" data-id=\"8398512\" data-title=\"-，-\" id=\"ids-module-8398512\">  <div>   <p><span style=\"font-size:9.6px;\"><strong><span style=\"color:#cc0000;\">缺点：建议没有熨烫设备的慎拍</span></strong></span></p>   <p><span style=\"color:#000000;\"><span style=\"font-size:9.6px;\"><strong>优点：</strong></span></span></p>  </div> </div> <p>&nbsp;</p> <div class=\"dm_module\" data-id=\"8422006\" data-title=\"尺寸\" id=\"ids-module-8422006\">  <div>   <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/408034679/O1CN01vfmIln1kR1gTpVokj_!!408034679.jpg\" style=\"max-width:400px;\" size=\"528x228\"></p>  </div> </div> <p>&nbsp;</p> <div class=\"dm_module\" data-id=\"8422012\" data-title=\"详情\" id=\"ids-module-8422012\">  <div>   <p><strong>店主描述：</strong></p>   <p><strong>西装料子 建议没有熨烫设备的慎拍 因为折叠之后再寄出去</strong></p>   <p><strong>到手肯定有点皱的 但是烫过之后会满垂坠的料子</strong></p>   <p><strong>裙子的部分客服和我说是jk的款式 额 其实我只是照着林小宅的格子那款做的</strong></p>   <p><strong>毕竟主体部分是斗篷 连衣裙只是为了凑套</strong></p>   <p><strong>本来想做半裙 但是这个搭配半裙的话 上半身穿啥肯定又是苦手</strong></p>   <p><strong>所以就直接做了连衣裙</strong></p>   <p><strong>希望不要撕逼啊 只是普通的裙子啊我都怕了</strong></p>   <p><strong>领结不配送的 是之前搭配别的衣服买的</strong></p>   <p><strong>植绒丝带是配送的 麻烦妹子们自己打个蝴蝶结啦 我就是这么简陋哈哈哈</strong></p>  </div> </div> <p>&nbsp;</p> <div class=\"dm_module\" data-id=\"8585519\" data-title=\"平铺细节\" id=\"ids-module-8585519\">  <div>   <p style=\"text-align:center;\"><strong><span style=\"color:#cc0000;\">*平铺细节图</span>&nbsp;<span style=\"color:#cc0000;line-height:1.5;\">*</span></strong></p>   <p>&nbsp;</p>  </div> </div> <p>&nbsp;</p> <p>&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/408034679/TB2NoX2bHJmpuFjSZFBXXXaZXXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/408034679/TB2RNJRbS4mpuFjSZFOXXaUqpXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i2/408034679/TB2yYRTbNtmpuFjSZFqXXbHFpXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/408034679/TB21jx5bHxmpuFjSZJiXXXauVXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/408034679/O1CN01MNTq8Y1kR1giHg5kZ_!!408034679.jpg\" style=\"max-width:400px;\" size=\"810x608\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/408034679/TB2W3p5bHBmpuFjSZFAXXaQ0pXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/408034679/TB2xrVTbNtmpuFjSZFqXXbHFpXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/408034679/TB2wnAnaBP8F1JjSspkXXcvEpXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/408034679/TB24z3WatqgF1JjSsppXXaBNXXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/408034679/TB2a67WatqgF1JjSsppXXaBNXXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/408034679/TB2yP8SXlbBIuJjy1zdXXaxRXXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/408034679/TB2ffsqaBP8F1JjSspaXXb4ypXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i2/408034679/TB21hUoarT8F1Jjy0FgXXX3fpXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\">&nbsp;</p> <div class=\"dm_module\" data-id=\"8585525\" data-title=\"上身\" id=\"ids-module-8585525\">  <div>   <p style=\"text-align:center;\"><strong><span style=\"color:#cc0000;\">*上身搭配参考*</span></strong></p>  </div> </div> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/408034679/TB2gZBqbQqvpuFjSZFhXXaOgXXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/408034679/TB2lc47bNlmpuFjSZPfXXc9iXXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/408034679/TB2TwB4bJXnpuFjSZFoXXXLcpXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/408034679/TB2s902bNhmpuFjSZFyXXcLdFXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/408034679/TB2yhx5bHBmpuFjSZFAXXaQ0pXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/408034679/TB2Qhx5bHBmpuFjSZFAXXaQ0pXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/408034679/TB2zyXUbHJmpuFjSZFwXXaE4VXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i2/408034679/TB21yFZbJFopuFjSZFHXXbSlXXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/408034679/TB2g8XZbOlnpuFjSZFgXXbi7FXa_!!408034679.jpg\" style=\"max-width:400px;\" size=\"652x652\"></p> <p style=\"text-align:center;\">&nbsp;</p> <p style=\"text-align:center;\">&nbsp;</p>"
        },
        {
            "id": 4,
            "name": "薇娅定制2019新款高定刺绣棒球连衣裙 QSS006421",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i1/69226163/O1CN01YGLI9E1vOhS0RAzjw_!!69226163.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/69226163/O1CN01xbPUf21vOhS0ABqro_!!69226163.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/69226163/O1CN01LoPXr11vOhRzLJ8eO_!!69226163.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/69226163/O1CN01rdIg0z1vOhRyJ2xnL_!!69226163.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/69226163/O1CN01KG1ZPI1vOhRyJ3EQW_!!69226163.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/69226163/O1CN01YGLI9E1vOhS0RAzjw_!!69226163.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/69226163/O1CN01xbPUf21vOhS0ABqro_!!69226163.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<p><a href=\"//huodong.m.taobao.com/act/talent/live.html?ut_sk=1.V/B70cWzqVcDAK7vhN32AdID_21380790_1484242947105.Copy.4&amp;id =0&amp;sourceType=other&amp;livetype=living&amp;userId=69226163&amp;type=507&amp;suid=BD90D548-BDCF-495C-A469-6D672BCCEDE6&amp;un =763986808e08433b3911dc70f8aca8ac&amp;share_crt_v=1&amp;cpp=1&amp;shareurl=true&amp;spm=a313p.22.2b0.22119107991&amp;short_name =h.XDzXLv&amp;cv=IJUPhEhzPw&amp;sm=7a54da&amp;app=chrome\" target=\"_blank\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i2/69226163/O1CN018r0GVo1vOhRGftYUb_!!69226163.jpg\" style=\"max-width:400px;\" size=\"750x474\"></a><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/69226163/O1CN01eYmaZc1vOhRDRYqCl_!!69226163.jpg\" style=\"max-width:400px;\" size=\"750x340\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/69226163/O1CN01C2vbpk1vOhRD1sk91_!!69226163.jpg\" style=\"max-width:400px;\" size=\"750x158\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i2/69226163/O1CN01ljNkYS1vOhRHoYNVn_!!69226163.jpg\" style=\"max-width:400px;\" size=\"790x437\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/69226163/O1CN01zN415f1vOhS0eBHdf_!!69226163.jpg\" style=\"max-width:400px;\" size=\"800x800\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/69226163/O1CN01LoPXr11vOhRzLJ8eO_!!69226163.jpg\" style=\"max-width:400px;\" size=\"800x800\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/69226163/O1CN01rdIg0z1vOhRyJ2xnL_!!69226163.jpg\" style=\"max-width:400px;\" size=\"800x800\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/69226163/O1CN01KG1ZPI1vOhRyJ3EQW_!!69226163.jpg\" style=\"max-width:400px;\" size=\"800x800\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/69226163/O1CN01YGLI9E1vOhS0RAzjw_!!69226163.jpg\" style=\"max-width:400px;\" size=\"800x800\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/69226163/O1CN01BW0Vko1vOhRxLKgmA_!!69226163.jpg\" style=\"max-width:400px;\" size=\"800x1067\"></p>"
        },

        {
            "id": 5,
            "name": "很仙的法国小众连衣裙女春秋冬针织打底2019流行裙子复古长裙过膝",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i4/3342578018/O1CN01cTOTgP296I97sNFbe_!!3342578018.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/3342578018/O1CN01bjMWtQ296I99nWkYn_!!3342578018.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/3342578018/O1CN019aGQOA296I99yHBom_!!3342578018.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/3342578018/O1CN01MwUAIY296I98qcUC5_!!3342578018.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/3342578018/O1CN01Qs8YkP296I99yHrS0_!!3342578018.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/3342578018/O1CN01cTOTgP296I97sNFbe_!!3342578018.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/3342578018/O1CN01bjMWtQ296I99nWkYn_!!3342578018.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/3342578018/O1CN01raIb92296I98ZxcNW_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/3342578018/O1CN01yGZO7W296I9AnUeqA_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/3342578018/O1CN01N9TSzO296I99AplBJ_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/3342578018/O1CN01PH0Bf8296I99AqhOX_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/3342578018/O1CN01RYc1hO296I997bpXk_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/3342578018/O1CN01o3BPXm296I99ArAT8_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/3342578018/O1CN01D7OSs5296I97UoGk2_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/3342578018/O1CN01Dwp3S3296I9ANf1ve_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/3342578018/O1CN01gs7FMP296I9AncNYT_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/3342578018/O1CN01QHQZmX296I97sZ4Jw_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/3342578018/O1CN01w11Whn296I96nuCPi_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/3342578018/O1CN01D8TBXz296I9AnciKd_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/3342578018/O1CN01cy9amN296I99yUkhP_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/3342578018/O1CN01V0avzv296I98a54NT_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/3342578018/O1CN01BV7eMP296I9Anca1q_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/3342578018/O1CN01c9vaot296I9ANepSG_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/3342578018/O1CN01dzIXmp296I997bhCu_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/3342578018/O1CN01XG1umv296I99AqhOY_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/3342578018/O1CN01sXonOv296I97saXjJ_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/3342578018/O1CN01692FKT296I997dJ2k_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/3342578018/O1CN01UHkVu6296I99GRQk2_!!3342578018.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
        },

        {
            "id": 7,
            "name": "法式复古裙两件套山本打底针织连衣裙子女2019春装新款中长款过膝",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i3/705821169/O1CN01003c9P1KVRUhJv3aE_!!705821169.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/705821169/O1CN01fq1sa41KVRUnlPT80_!!705821169.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/705821169/O1CN01hPA5jE1KVRUeGjNe1_!!705821169.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/705821169/O1CN01KEZJO81KVRUoMtsHZ_!!705821169.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/705821169/O1CN01lfSOBi1KVRUm47jaH_!!705821169.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/705821169/O1CN01003c9P1KVRUhJv3aE_!!705821169.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/705821169/O1CN01fq1sa41KVRUnlPT80_!!705821169.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<p style=\"margin:0;width:0;height:0;overflow:hidden;\"><img src=\"//img.alicdn.com/imgextra/i4/T2s4moXH8XXXXXXXXX-350475995.png?p=hb_v3_client_1017199_start_top_1_640x0q85s150_.webp\"></p><table align=\"center\" style=\"margin:0 auto;\"> <tbody><tr>  <td>   <div>    <img usemap=\"#1550762906635\" src=\"//img.alicdn.com/imgextra/i2/705821169/O1CN015uWXiE1KVRUvSKHVC_!!705821169.png?v=1550762906638_640x0q85s150_.webp\">   </div><map name=\"1550762906635\"><area shape=\"rect\" coords=\"4,234,184.99998,429.71997\" href=\"//item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-14891340457.66.18d815fd8FHMAU&amp;id=574518087708\"><area shape=\"rect\" coords=\"190,237,375.0,429.0\" href=\"//item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-14891340457.72.18d815fd8FHMAU&amp;id=577165124229\"><area shape=\"rect\" coords=\"4,449,187.0,645.0\" href=\"//item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-14891340457.41.7675c555oQj213&amp;id=585961129551\"><area shape=\"rect\" coords=\"191,450,376.0,647.0\" href=\"//item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-14891340457.54.b2407ce5Nqk8u3&amp;id=585399150344\"><area shape=\"rect\" coords=\"379,234,561.0,430.0\" href=\"//item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-14891340457.19.2d2dc555GgDRHr&amp;id=586924355457\"><area shape=\"rect\" coords=\"567,234,747.0,430.0\" href=\"//item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-14891340457.35.7675c555oQj213&amp;id=586090142107\"><area shape=\"rect\" coords=\"379,450,560.0,648.0\" href=\"//item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-14891340457.62.58253145rd1t3r&amp;id=586396092415\"><area shape=\"rect\" coords=\"566,451,746.0,648.0\" href=\"//item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-14891340457.20.7bd5c555mFoCND&amp;id=586629241899\"></map></td> </tr></tbody></table><p style=\"margin:0 0 2.6666666666666665px 0;width:0;height:0;overflow:hidden;\"><img src=\"//img.alicdn.com/imgextra/i4/T2s4moXH8XXXXXXXXX-350475995.png?p=hb_v3_client_1017199_end_top_1_640x0q85s150_.webp\"></p><p style=\"margin:0;width:0;height:0;overflow:hidden;\"><img src=\"//img.alicdn.com/imgextra/i4/T2s4moXH8XXXXXXXXX-350475995.png?p=hb_v3_client_1017201_start_top_2_640x0q85s150_.webp\"></p><table align=\"center\" style=\"margin:0 auto;\"> <tbody><tr>  <td>   <div>    <img usemap=\"#1550763900878\" src=\"//img.alicdn.com/imgextra/i4/705821169/O1CN01eO0GYo1KVRV0XZmya_!!705821169.png?v=1550763900880_640x0q85s150_.webp\">   </div><map name=\"1550763900878\"><area shape=\"rect\" coords=\"9,127,185.0,374.0841\" href=\"//item.taobao.com/item.htm?spm=a1z38n.10678284.0.0.6e111debplSOMk&amp;id=587443895385\"><area shape=\"rect\" coords=\"191,128,373.0,377.28802\" href=\"//item.taobao.com/item.htm?spm=a1z38n.10678284.0.0.6e111debplSOMk&amp;id=586938944376\"><area shape=\"rect\" coords=\"376,128,558.0,377.28802\" href=\"//item.taobao.com/item.htm?spm=a1z38n.10678284.0.0.6e111debplSOMk&amp;id=587290054770\"><area shape=\"rect\" coords=\"567,127,749.0,376.28802\" href=\"//item.taobao.com/item.htm?spm=a1z38n.10678284.0.0.6e111debz0IZVX&amp;id=587554727442\"></map></td> </tr></tbody></table><p style=\"margin:0 0 2.6666666666666665px 0;width:0;height:0;overflow:hidden;\"><img src=\"//img.alicdn.com/imgextra/i4/T2s4moXH8XXXXXXXXX-350475995.png?p=hb_v3_client_1017201_end_top_2_640x0q85s150_.webp\"></p><p><a href=\"//h5.m.taobao.com/cm/collocation.html?id=15646400&amp;userId=705821169\" target=\"_blank\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/705821169/O1CN01eIZ8oo1KVRUcqtdQo_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x528\"></a><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i2/705821169/O1CN014VbzVO1KVRUUItxVJ_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x510\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/705821169/O1CN01o4H4XK1KVRUbriFkI_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x803\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/705821169/O1CN01qJN8Eo1KVRUXGhijq_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x162\"></p> <p style=\"text-align:center;\"><span style=\"font-size:10.666666666666666px;\"><span style=\"font-family:宋体;\">被你们赞爆了的两件式针织裙</span></span></p> <p style=\"text-align:center;\"><span style=\"font-size:10.666666666666666px;\"><span style=\"font-family:宋体;\">韩系洋气腔调到要迷昏了眼呀</span>~</span></p> <p style=\"text-align:center;\"><span style=\"font-size:10.666666666666666px;\"><span style=\"font-family:宋体;\">这款就是上次微淘给你们剧透过的</span></span></p> <p style=\"text-align:center;\"><span style=\"font-size:10.666666666666666px;\"><span style=\"font-family:宋体;\">简直就是谁见到谁都会爱上的款式</span></span></p> <p style=\"text-align:center;\"><span style=\"font-size:10.666666666666666px;\"><span style=\"font-family:宋体;\">日常的聚会呀，年会呀通通都很适合</span></span></p> <p style=\"text-align:center;\"><span style=\"font-size:10.666666666666666px;\"><span style=\"font-family:宋体;\">不需要任何的装饰你就可以轻易<span style=\"color:#b22222;\">站稳</span></span><span style=\"color:#b22222;\">C</span><span style=\"font-family:宋体;\"><span style=\"color:#b22222;\">位</span>啦</span></span></p> <p style=\"text-align:center;\"><span style=\"font-size:10.666666666666666px;\"><span style=\"color:#b22222;\"><span style=\"font-family:宋体;\">优雅的针织跟雪纺的</span>CP</span><span style=\"font-family:宋体;\"><span style=\"color:#b22222;\">组合</span>，性感迷人且不失飘逸感</span></span></p> <p style=\"text-align:center;\"><span style=\"font-size:10.666666666666666px;\"><span style=\"font-family:宋体;\">外层就是一件不规则的开叉针织，<span style=\"color:#b22222;\">舒服的针织面料</span>手感特别好</span></span></p> <p style=\"text-align:center;\"><span style=\"font-size:10.666666666666666px;\"><span style=\"font-family:宋体;\">而内里则是<span style=\"color:#b22222;\">百褶的雪纺</span>，有着牛奶般的舒服触感，贴身穿不用害怕扎人哦</span></span></p> <p style=\"text-align:center;\"><span style=\"font-size:10.666666666666666px;\"><span style=\"font-family:宋体;\">针织面料不是是特别薄的那种，所以现在也是可以穿的</span></span></p> <p style=\"text-align:center;\"><span style=\"font-size:10.666666666666666px;\"><span style=\"font-family:宋体;\">在外面冷淡的话就可以<span style=\"color:#b22222;\">搭配个大衣</span>之类的</span></span></p> <p style=\"text-align:center;\"><span style=\"font-size:10.666666666666666px;\"><span style=\"font-family:宋体;\">到了暖气房脱掉外套谁能比的过你呢</span></span></p> <p style=\"text-align:center;\"><span style=\"font-size:10.666666666666666px;\"><span style=\"font-family:宋体;\">现在我觉得聚会除了穿一件精致的外套以外</span></span></p> <p style=\"text-align:center;\"><span style=\"font-size:10.666666666666666px;\"><span style=\"font-family:宋体;\">内里还要搭配一件仙气又高雅的裙子，这样你才能里外都美过人呀</span>~</span></p> <p><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/705821169/O1CN01lTa7OE1KVRUZFlw75_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x1383\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/705821169/O1CN01BS4AuZ1KVRUdmkXNT_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x1202\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i2/705821169/O1CN01lTv5Xu1KVRUgh4Osl_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x491\"><a href=\"//item.taobao.com/item.htm?spm=a1z38n.10678284.0.0.6e111debYEAZXB&amp;id=585264861953\" target=\"_blank\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/705821169/O1CN01KasY221KVRUc6F7Px_!!705821169.jpg\" style=\"max-width:400px;\" size=\"189x372\"></a><a href=\"//item.taobao.com/item.htm?spm=a1z38n.10678284.0.0.6e111debK7fDWp&amp;id=585133996876\" target=\"_blank\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/705821169/O1CN016uDY4f1KVRUbB7u8L_!!705821169.jpg\" style=\"max-width:400px;\" size=\"186x372\"></a><a href=\"//item.taobao.com/item.htm?spm=a1z38n.10678284.0.0.6e111debYEAZXB&amp;id=585268173490\" target=\"_blank\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/705821169/O1CN01qD3ymf1KVRUbB8qLf_!!705821169.jpg\" style=\"max-width:400px;\" size=\"183x372\"></a><a href=\"//item.taobao.com/item.htm?spm=a1z38n.10678284.0.0.6e111debYEAZXB&amp;id=585267901113\" target=\"_blank\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/705821169/O1CN01aX8nU21KVRUZyRQXx_!!705821169.jpg\" style=\"max-width:400px;\" size=\"192x372\"></a><a href=\"//item.taobao.com/item.htm?spm=a1z38n.10678284.0.0.6e111debK7fDWp&amp;id=585619699993\" target=\"_blank\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/705821169/O1CN01Xlzz7z1KVRUafP7Yu_!!705821169.jpg\" style=\"max-width:none;\" size=\"189x288\"></a><a href=\"//item.taobao.com/item.htm?spm=a1z38n.10678284.0.0.6e111debK7fDWp&amp;id=585134720767\" target=\"_blank\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/705821169/O1CN01ug6QCX1KVRUaayLin_!!705821169.jpg\" style=\"max-width:400px;\" size=\"186x288\"></a><a href=\"//item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-14891340457.72.46781dfe5DgcSm&amp;id=583873866525\" target=\"_blank\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/705821169/O1CN01eCO38r1KVRUbB8VZf_!!705821169.jpg\" style=\"max-width:400px;\" size=\"183x288\"></a><a href=\"//item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-14891340457.78.51d71dfedYCSzQ&amp;id=583029716594\" target=\"_blank\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/705821169/O1CN016VHpK71KVRUbqw2SA_!!705821169.jpg\" style=\"max-width:400px;\" size=\"192x288\"></a><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/705821169/O1CN01yFdr3Y1KVRUeZnDRq_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x3434\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i2/705821169/O1CN01SghHi71KVRUgiB1d1_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x3067\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/705821169/O1CN01Gv5g3m1KVRUee3lz2_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x3962\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i2/705821169/O1CN01MdLOuX1KVRUeDgerf_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x3378\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i2/705821169/O1CN01iY6VnG1KVRUcAzRbR_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x3855\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/705821169/O1CN01jl3M7s1KVRUeVjJwd_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x3189\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/705821169/O1CN01vmRxic1KVRUdzcZuF_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x3696\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i4/705821169/O1CN01nf5hFh1KVRUfFjjfj_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x2652\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/705821169/O1CN01nUMK0G1KVRUfCx4cJ_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x1894\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/705821169/O1CN01ZUtQpD1KVRUeZol23_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x3434\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/705821169/O1CN013XH3lf1KVRUfMwzT2_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x3067\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i1/705821169/O1CN01TgRzFJ1KVRUcAzJJp_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x3962\"><img align=\"absmiddle\" src=\"//img.alicdn.com/imgextra/i3/705821169/O1CN01P9Ijgj1KVRUfCxg4L_!!705821169.jpg\" style=\"max-width:400px;\" size=\"750x1707\"></p> <p style=\"margin:0;width:0;height:0;overflow:hidden;\"><img src=\"//img.alicdn.com/imgextra/i4/T2s4moXH8XXXXXXXXX-350475995.png?p=hb_v3_client_983737_start_bot_1_640x0q85s150_.webp\"></p> <table align=\"center\" style=\"margin:0 auto;\">  <tbody><tr>   <td><img src=\"//img.alicdn.com/imgextra/i3/705821169/O1CN011KVRSuwJXZifslt_!!705821169.jpg?v=1542887476586_640x0q85s150_.webp\"></td>  </tr> </tbody></table> <p style=\"margin:0 0 2.6666666666666665px 0;width:0;height:0;overflow:hidden;\"><img src=\"//img.alicdn.com/imgextra/i4/T2s4moXH8XXXXXXXXX-350475995.png?p=hb_v3_client_983737_end_bot_1_640x0q85s150_.webp\"></p>"
        },

        {
            "id": 8,
            "name": "女装2018夏装新款性感挂脖网气质纱亮片立领绣花露肩包臀连衣裙子",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i2/429251045/TB2ab5xDwmTBuNjy1XbXXaMrVXa_!!429251045.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/429251045/TB2ZfDikAZmBKNjSZPiXXXFNVXa_!!429251045.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/429251045/TB2XPigDwaTBuNjSszfXXXgfpXa_!!429251045.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/429251045/TB2HsjeDuuSBuNjy1XcXXcYjFXa_!!429251045.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/429251045/TB2ab5xDwmTBuNjy1XbXXaMrVXa_!!429251045.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/429251045/TB2ZfDikAZmBKNjSZPiXXXFNVXa_!!429251045.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><p class=\"desc-txt\">颜色：杏色</p><p class=\"desc-txt\">材质：网纱绣花{有里布}</p><p class=\"desc-txt\">尺码：S M L</p><p class=\"desc-txt\">尺寸:S 裙长78cm 胸围78cm 腰围63cm</p><p class=\"desc-txt\">M 裙长79cm 胸围82cm 腰围67cm</p><p class=\"desc-txt\">L 裙长80cm 胸围86cm 腰围71cm</p><p class=\"desc-txt\">温馨提示：平面测量单CM因测量方法不同，存在1~2cm误差属于正常范围</p><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/429251045/TB2xawmkEOWBKNjSZKzXXXfWFXa_!!429251045.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/429251045/TB2I1RSvcyYBuNkSnfoXXcWgVXa_!!429251045.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/429251045/TB2bI8ZkFkoBKNjSZFkXXb4tFXa_!!429251045.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/429251045/TB2PtpJkOMnBKNjSZFoXXbOSFXa_!!429251045.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/429251045/TB2VtpJkOMnBKNjSZFoXXbOSFXa_!!429251045.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/429251045/TB2hRReDGmWBuNjy1XaXXXCbXXa_!!429251045.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/429251045/TB2XZDnDruWBuNjSszgXXb8jVXa_!!429251045.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/429251045/TB2MfreDA9WBuNjSspeXXaz5VXa_!!429251045.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/429251045/TB2c.V5kRsmBKNjSZFFXXcT9VXa_!!429251045.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/429251045/TB2En5UDuuSBuNjSsplXXbe8pXa_!!429251045.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/429251045/TB2yFtuviCYBuNkSnaVXXcMsVXa_!!429251045.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/429251045/TB2oHPbDv9TBuNjy1zbXXXpepXa_!!429251045.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
        },

        {
            "id": 9,
            "name": "很仙的法国小众连衣裙春装气质小个子复古学生显瘦连衣裙夏小清新",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i2/2551324635/TB23VfqcEz.BuNjt_bXXXcQmpXa_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/TB2.FyjwIyYBuNkSnfoXXcWgVXa_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/TB2LqMCFv9TBuNjy0FcXXbeiFXa_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/TB2p5PaFGmWBuNjy1XaXXXCbXXa_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/TB2LEyScBcXBuNjt_XoXXXIwFXa_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/TB23VfqcEz.BuNjt_bXXXcQmpXa_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/TB2.FyjwIyYBuNkSnfoXXcWgVXa_!!2551324635.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN013QrMiy1k6sGIItRyA_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01mzL1K41k6sGHPAq1d_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01d9aiw01k6sGAee6Ie_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01mkZLkJ1k6sGJjcKTj_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01rKpV5A1k6sGHP8xbi_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01w5tNLU1k6sGHP91l1_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN019OlW8W1k6sGAefZkD_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01rjeVZq1k6sGJF5Oqx_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN016Hkf4I1k6sGHWscU6_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN015E7BiR1k6sGIkPsZv_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01G4uNQF1k6sGICZmk2_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01yLIbLe1k6sGHPB6eP_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
        },

        {
            "id": 10,
            "name": "很仙的毛衣开衫外套慵懒风加厚洋气百搭ins超火网红针织开衫女春",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i4/2551324635/O1CN01T5RHRi1k6sF0v4wpm_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN01GjlMcz1k6sF4HQvxP_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN011k6sEs3MnvwbwAW_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN01k6rhps1k6sEjuTayd_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01vjAHGQ1k6sEq3pXi0_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN01T5RHRi1k6sF0v4wpm_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN01GjlMcz1k6sF4HQvxP_!!2551324635.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01Amacva1k6sEmpyn1m_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN011k6sElhstGlYrZM_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01A4bHYt1k6sEkVfwwk_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN011k6sElhrHWFWnne_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN011k6sEkrPg0ghlbH_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN011k6sElQktozGQ87_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN011k6sElhskyi19SX_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN011k6sEjYnmHIIMKC_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN011k6sEjzLa5oW4vA_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01NIq1ni1k6sElLAWRv_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN011k6sEm26V0hcVRK_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01pEiwoR1k6sEl5J14K_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN011k6sEljyzeMhsPq_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01l5Y6SF1k6sEkrOGjI_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
        },

        {
            "id": 11,
            "name": "小香风外套很仙的慵懒风2019流行春短款网红高贵优雅必入的小外套",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i4/2551324635/O1CN01S5nwfv1k6sFN59zHA_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN01vmRffR1k6sFsl4XNs_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN01paGCzd1k6sG8ERbqm_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN01E7H8KL1k6sFlf6ini_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN01hu30U91k6sFvs5bNo_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN01S5nwfv1k6sFN59zHA_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN01vmRffR1k6sFsl4XNs_!!2551324635.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01G9lrBo1k6sFl0jDfU_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN014jSUBW1k6sFjqE18p_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01EeMYgH1k6sFiaFJmS_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01xXspYF1k6sFhViMjg_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN015MygKR1k6sFhVgxRl_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01tyNwBH1k6sFjjTArb_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN019UIRci1k6sFjjU74i_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01KbW1ni1k6sFlEUhj6_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01Q893Og1k6sFx0M4pq_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01H91myu1k6sFvtSYGO_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01ZytaNv1k6sFuVXdXn_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN011fA8uu1k6sFl0hkEC_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01tElLzQ1k6sFkKcM94_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN0194muTG1k6sFlEVRSW_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01SsmBkV1k6sFlEUIlb_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01fHogQx1k6sFgpmmtt_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01wmUfmQ1k6sFlEWRmC_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01WISxdD1k6sFjqGIXX_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01nF38Ap1k6sFhuP6R0_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01GJGCau1k6sFlEUR5a_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01H00Emn1k6sFjwSRmI_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
        },

        {
            "id": 12,
            "name": "很仙的毛衣开衫外套慵懒风加厚洋气百搭韩版网红针织开衫女春新款",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i2/2551324635/O1CN014MSGWg1k6sFB3Nle5_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN01xbA9ty1k6sFKJvXun_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN01pxA3jb1k6sFHXxcHI_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01XyivwI1k6sFHL5RtH_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN01ayS88M1k6sFI2VUa9_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN014MSGWg1k6sFB3Nle5_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN01xbA9ty1k6sFKJvXun_!!2551324635.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01umV8xv1k6sFHn9lVx_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01gF2ewM1k6sFHn9lVv_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01gXOOkk1k6sFIJZnOg_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01oCjIuz1k6sFB4eW28_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01FnQHhW1k6sFJ5EBjY_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN017AgW7E1k6sFFNwloo_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01Xz6VWA1k6sFIJYn26_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01XycuIW1k6sFJX2PWF_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01JNEftE1k6sFFNw24t_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01dQUmLk1k6sFIfKjaY_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01CWfFRE1k6sFB4ddzK_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01guc6nh1k6sFJ5Dmo9_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01hUWh7Y1k6sFI3uhNX_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
        },

        {
            "id": 13,
            "name": "网红牛仔裤高腰2019春款百搭重工直筒显瘦适合大腿根粗的裤子春季",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i3/2551324635/O1CN01ZYqy4U1k6sFKbwdu3_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01GKtP8S1k6sFMcojVi_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01jOd05G1k6sFH4uutC_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN01CPxlh11k6sFH4y0Nh_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN016Gfq5Q1k6sFIe3UhV_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN01ZYqy4U1k6sFKbwdu3_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01GKtP8S1k6sFMcojVi_!!2551324635.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div>"
        },

        {
            "id": 14,
            "name": "很仙的毛衣开衫慵懒风加厚洋气百搭2019新款时尚网红针织开衫韩版",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i3/2551324635/O1CN011k6sElgNN39s9JD_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN011k6sEng5DNNNODE_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01uVY7eq1k6sEubaXsR_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN01pPHdnQ1k6sEtUj6wY_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN011k6sEsscVuQHiQF_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN011k6sElgNN39s9JD_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN011k6sEng5DNNNODE_!!2551324635.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN011k6sEpeclbo5Mhc_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN012WuV4e1k6sEtOApjD_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN011k6sEs2ET2SCBSj_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN011k6sEs8ZuFEgPGT_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01fKziC51k6sEqEd3VJ_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN011k6sErYXNviCNcv_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01Bv8Ay21k6sElO2sk5_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN011SdjUc1k6sErlrHCP_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN011k6sEsjL3X3FcXg_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN011k6sEpeeNREtYG7_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN011k6sElO3YKpxZ8I_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01Bg42xG1k6sErYa8QR_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01BaI42F1k6sEs2EnqN_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
        },

        {
            "id": 15,
            "name": "很仙的毛衣开衫慵懒风加厚洋气百搭韩版ins超火网红针织开衫外套",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i2/2551324635/TB2SBMQo9MmBKNjSZTEXXasKpXa_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/TB236CRp8nTBKNjSZPfXXbf1XXa_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/2551324635/TB2qoktp5MnBKNjSZFoXXbOSFXa_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/TB2VDU2pVkoBKNjSZFEXXbrEVXa_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01Rk56xd1k6sFEfpCNm_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/TB2SBMQo9MmBKNjSZTEXXasKpXa_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/TB236CRp8nTBKNjSZPfXXbf1XXa_!!2551324635.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01Q1QLqB1k6sEwX3kvt_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01Ptwsf01k6sEy669b4_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01XW6mHL1k6sEyuuMiD_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01jCx2Mh1k6sEyuvyT6_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01iBr3gA1k6sEy63jvX_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01sP7diH1k6sEzLgHv6_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01RHipYv1k6sF0VnrJy_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN016Uybs81k6sEwX3M0v_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01Ixu0VA1k6sEykEVK4_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01aDmgxm1k6sEz5DmV0_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01ZJyLsn1k6sEyuwRbq_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01SmEf6J1k6sEx7aL2S_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01qzf2yv1k6sF0JsRCF_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
        },

        {
            "id": 16,
            "name": "很仙的毛衣上衣洋气百搭慵懒风加厚韩版一字领ins超火网红毛衣女",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i4/2551324635/O1CN01IitLU31k6sF1wrFCX_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN016WDAud1k6sF1RpAZJ_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN017RpPoB1k6sF2kRsdj_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01UTinBN1k6sF1umxAI_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01kH9bBq1k6sEyjyA3G_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN01IitLU31k6sF1wrFCX_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN016WDAud1k6sF1RpAZJ_!!2551324635.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01ym94dx1k6sFe7Qg3E_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01gvYU6h1k6sFfOGPp0_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01kh8nZv1k6sFg2AeeN_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01uq6C3R1k6sFfHe9To_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01SeJcru1k6sFhCTN8v_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01PYWjEJ1k6sFdiPOqm_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01ph16sy1k6sFg80NlL_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01MvNFaP1k6sFe7TE3N_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01VxLX8w1k6sFd3en6L_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01YmxgfG1k6sFhCSps8_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01cYar1S1k6sFe7SYTm_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01FBRQ691k6sFfVARox_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01ZN3KfH1k6sFdiRPYP_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01ZB1veu1k6sFgWnMdq_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
        },

        {
            "id": 17,
            "name": "ins超火裙子心机小众设计感高腰羽毛流苏超仙重工网纱半身裙秋冬",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i3/2551324635/O1CN018wWYR81k6sF4BWwTa_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN01yjjjfU1k6sF8giOSw_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN01K64EEX1k6sF519S1O_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01IGTIcd1k6sF225wEp_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN01jNFPuK1k6sF4akEmL_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN018wWYR81k6sF4BWwTa_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN01yjjjfU1k6sF8giOSw_!!2551324635.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01xIJsEH1k6sF3cI3Kh_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN012pGilM1k6sF3cKOpu_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01oSm0B31k6sF3FnekW_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01ir7vIH1k6sF4dCdIa_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01B6B1y41k6sF2z5Utt_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01VQFPZd1k6sF4sk0xa_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01u8RYNK1k6sF4dCy6D_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01V1Hm0Z1k6sF53ZhML_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01n9sK8K1k6sEwlECre_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01OWiEbH1k6sF4Dwmwc_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01Q8yqUz1k6sF3FmW6b_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01nLof5s1k6sF3Q9Vjo_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01SdTi0X1k6sF3Q6pSJ_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
        },

        {
            "id": 18,
            "name": "DGU studio/ins超火的半身裙重工网纱秋冬学生显瘦心机裙子设计感",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i4/2551324635/O1CN01O9Re0C1k6sFTFXcTC_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN01WkAkJh1k6sFTLuqP4_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01SHJZvP1k6sFUQm4Oo_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01YiUBs81k6sFUpvCb5_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN01NGI7Mm1k6sFTodKHl_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN01O9Re0C1k6sFTFXcTC_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN01WkAkJh1k6sFTLuqP4_!!2551324635.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01e0zJyg1k6sFUlSw39_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN0158mjE31k6sFWFXvTR_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01exEfUU1k6sFS0NWsC_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01DTzdhP1k6sFUQ0hof_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01hVYN8Z1k6sFNfAqjg_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01mNnQdX1k6sFScS79o_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01j62MDf1k6sFTzHdbX_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01Rvphlf1k6sFUPyYmM_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN0121KT2l1k6sFT2afkT_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01enVRGe1k6sFTzGlYu_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01jPnDZd1k6sFScRqYZ_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01cNJ3px1k6sFVO3brw_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
        },

        {
            "id": 19,
            "name": "很仙的上衣洋气衬衫百搭甜美显瘦韩版超仙复古心机衬衫设计感女",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i2/2551324635/O1CN01uk826P1k6sGD3lsJ0_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/2551324635/O1CN01aLLaZl1k6sGENjUtp_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01C7Ek821k6sGClK2IA_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01S1J2uN1k6sGF5Ko16_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN01eQ6lm91k6sGD9Jfuh_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01uk826P1k6sGD3lsJ0_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/2551324635/O1CN01aLLaZl1k6sGENjUtp_!!2551324635.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01EXy4kP1k6sGBRjiAn_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01AF5PNa1k6sGDs3wBP_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01JvGKfQ1k6sGDzEVNq_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01GfSEHr1k6sGDs3CR3_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01NPv1TS1k6sGD5V5YC_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01HxXbtk1k6sGDDwWLb_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01dBBo8L1k6sGDB0L37_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN019zIFwy1k6sGBRj6lO_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN013UV1ny1k6sGDzEN50_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01pWlVev1k6sGF75xr0_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
        },

        {
            "id": 20,
            "name": "衬衫女设计感小众心机洋气韩范复古时尚显瘦气质很仙的上衣超仙",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i3/2551324635/O1CN01RJNTDH1k6sGKjG1In_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01lY7NvG1k6sGKEVjLo_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01gQDnzS1k6sGJjfTBn_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN01ZlWQLg1k6sGKEWfhv_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01n0HYv81k6sGG1zLuR_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN01RJNTDH1k6sGKjG1In_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01lY7NvG1k6sGKEVjLo_!!2551324635.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01n4Hwmq1k6sGKWQoE0_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN018y6alw1k6sGJMvyf0_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01y0ocf61k6sGJMuR0n_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN015P4Whm1k6sGKoKXkh_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01xAHCLB1k6sGJDU24M_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01jCE9Wf1k6sGHDkLsv_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01QyVEWV1k6sGJMvVXq_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01yivTql1k6sGBiQJMt_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01uvSU7N1k6sGKJTg4G_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01BOn3OS1k6sGKoI852_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
        },


        {
            "id": 21,
            "name": "衬衫女设计感小众中长款心机气质韩版显瘦百搭很仙的上衣洋气衬衫",
            "desc": "小仙女专属",
            "categoryId": 23,
            "imgList": "https://img.alicdn.com/imgextra/i4/2551324635/O1CN01aRgSOG1k6sGG19iUp_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN01sadPvm1k6sGGu1hID_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2551324635/O1CN0142CIwL1k6sGC50L5L_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN016gZ98T1k6sGDihLo0_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2551324635/O1CN01VMAogc1k6sGDr2sQq_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN01aRgSOG1k6sGG19iUp_!!2551324635.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2551324635/O1CN01sadPvm1k6sGGu1hID_!!2551324635.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2551324635/O1CN01zwFcCR1k6sGEVddI5_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01Khh2KJ1k6sGDj9HS1_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01dJaAVu1k6sGFlATYw_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01ocpzL51k6sGDECRBU_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01qB0rpl1k6sGDRCO9b_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01CD42oR1k6sGDRCzZQ_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2551324635/O1CN01vPHySb1k6sGBNt2sn_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01zdIhOY1k6sGFYBC8H_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2551324635/O1CN01W2tQiu1k6sGCT5gEn_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2551324635/O1CN01WpGCjt1k6sG6yuX4a_!!2551324635.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
        },

        {
            "id": 22,
            "name": "个性金箔大理石纹X苹果8plus/7p/6s手机壳iPhoneXs max硅胶软潮xr",
            "desc": "",
            "categoryId": 48,
            "imgList": "https://img.alicdn.com/imgextra/i1/1789939185/O1CN012HimKzCjNbzHGBJ_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/1789939185/O1CN012HimKybbbsGSeuL_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/1789939185/O1CN01rxbH4J2HimKyW1ZD9_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/1789939185/O1CN01g0UDuQ2HimKzcoRud_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/1789939185/O1CN01Cw3YT32HimKw9KWau_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/1789939185/O1CN012HimKzCjNbzHGBJ_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/1789939185/O1CN012HimKybbbsGSeuL_!!1789939185.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/1789939185/O1CN012HimKyvk5yKmEQm_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/1789939185/O1CN01Gwpcjt2HimKzcvhWD_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/1789939185/O1CN012HimKyvhwy2LbPi_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/1789939185/O1CN012HimKx9j18ZnQ3z_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/1789939185/O1CN01lW43xq2HimKy20sdJ_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
          },

          {
            "id": 23,
            "name": "创意星空简约软壳苹果Xs/Max/XR手机壳苹果8p硅胶7plus全包6s男女",
            "desc": "",
            "categoryId": 48,
            "imgList": "https://img.alicdn.com/imgextra/i3/1789939185/O1CN012HimKnzGWWAWHi6_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/1789939185/O1CN012HimKlBhdrQMO9z_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/1789939185/O1CN012HimKlBiBDCJ6CQ_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/1789939185/O1CN012HimKnItoTuymyb_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/1789939185/O1CN012HimKnJjAGE66XC_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/1789939185/O1CN012HimKnzGWWAWHi6_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/1789939185/O1CN012HimKlBhdrQMO9z_!!1789939185.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/1789939185/O1CN012HimKmRau7ljzA9_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/1789939185/O1CN012HimKoPlqeoHFqj_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/1789939185/O1CN012HimKoCjgFDN2wb_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/1789939185/O1CN012HimKgOGtodSZQW_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/1789939185/O1CN012HimKnJqkhvFk1s_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
          },

          {
            "id": 24,
            "name": "欧美个性豹纹苹果xs max/X手机壳iphone7plus/8/XR硅胶6s全包女款",
            "desc": "",
            "categoryId": 48,
            "imgList": "https://img.alicdn.com/imgextra/i1/1789939185/O1CN01jSfr5a2HimL9EEHPh_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/1789939185/O1CN01YVOViZ2HimLAOGHqL_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/1789939185/O1CN0109jU5G2HimLACG6D6_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/1789939185/O1CN01Owz0Vd2HimL8Y2Jfn_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/1789939185/O1CN01SRLQoH2HimL7RBYgF_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/1789939185/O1CN01jSfr5a2HimL9EEHPh_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/1789939185/O1CN01YVOViZ2HimLAOGHqL_!!1789939185.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/1789939185/O1CN017VTkie2HimL8YY8Xi_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/1789939185/O1CN01XFHyqs2HimL8YXw5I_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/1789939185/O1CN01zcYBmO2HimL9EdKKL_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/1789939185/O1CN011YFq622HimLACmJtH_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/1789939185/O1CN01weQSOR2HimL8xwvQG_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/1789939185/O1CN01cCH3uH2HimL9EPh5r_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
          },

          {
            "id": 25,
            "name": "日韩复古小爱心iPhone7 xsmax手机壳苹果Xr/8plus/软壳6s硅胶套潮",
            "desc": "",
            "categoryId": 48,
            "imgList": "https://img.alicdn.com/imgextra/i3/1789939185/O1CN01foIE2t2HimKzaaFs3_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/1789939185/O1CN012O14Wo2HimL1llswj_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/1789939185/O1CN01dwgC0W2HimL1YU8rJ_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/1789939185/O1CN012HimL1wGp7ZWaEi_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/1789939185/O1CN012HimL0oMk6zfGHk_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/1789939185/O1CN01foIE2t2HimKzaaFs3_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/1789939185/O1CN012O14Wo2HimL1llswj_!!1789939185.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/1789939185/O1CN01yEDigC2HimL1wNbSF_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/1789939185/O1CN012HimL17EdICGVOy_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/1789939185/O1CN012HimKzadg41NlJc_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/1789939185/O1CN01BTg5fK2HimKtmxu1G_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/1789939185/O1CN01fGxl2s2HimL0QfTmE_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/1789939185/O1CN01P1fsuw2HimL0Qek3m_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
          },

          {
            "id": 26,
            "name": "简约粉紫色水彩硬壳苹果6s手机壳iPhone8/7plus/X磨砂保护套简约",
            "desc": "",
            "categoryId": 48,
            "imgList": "https://img.alicdn.com/imgextra/i1/1789939185/TB2sC1DlpOWBuNjy0FiXXXFxVXa_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/1789939185/TB2OKeKlAyWBuNjy0FpXXassXXa_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/1789939185/TB2SMmEXoz.BuNjt_j7XXX0nFXa_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/1789939185/TB2j3iNlx1YBuNjy1zcXXbNcXXa_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/1789939185/TB2GK7Sc5MnBKNjSZFzXXc_qVXa_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/1789939185/TB2sC1DlpOWBuNjy0FiXXXFxVXa_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/1789939185/TB2OKeKlAyWBuNjy0FpXXassXXa_!!1789939185.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/1789939185/TB2gUhwdiOYBuNjSsD4XXbSkFXa_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/1789939185/TB2fhYolx9YBuNjy0FfXXXIsVXa_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/1789939185/TB2_HQNcYArBKNjSZFLXXc_dVXa_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/1789939185/TB2lNpxdamWBuNkHFJHXXaatVXa_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/1789939185/TB2oeiMlAyWBuNjy0FpXXassXXa_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
          },

          {
            "id": 27,
            "name": "网红同款闪粉色大理石苹果7plus手机壳iphone8/X/6s软硅胶少女心",
            "desc": "",
            "categoryId": 48,
            "imgList": "https://img.alicdn.com/imgextra/i4/1789939185/TB2kNR2iY1YBuNjSszhXXcUsFXa_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/1789939185/TB2i_42i1uSBuNjy1XcXXcYjFXa_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/1789939185/TB2vFg_iHSYBuNjSspiXXXNzpXa_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/1789939185/TB2PB0aiVmWBuNjSspdXXbugXXa_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/1789939185/TB2rEX2i1uSBuNjy1XcXXcYjFXa_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/1789939185/TB2kNR2iY1YBuNjSszhXXcUsFXa_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/1789939185/TB2i_42i1uSBuNjy1XcXXcYjFXa_!!1789939185.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/1789939185/TB2E2d4i1uSBuNjy1XcXXcYjFXa_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/1789939185/TB2N.o8iMmTBuNjy1XbXXaMrVXa_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/1789939185/TB2O7m_i9tYBeNjSspaXXaOOFXa_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/1789939185/TB2lBhJi1SSBuNjy0FlXXbBpVXa_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/1789939185/TB2_2FFi25TBuNjSspcXXbnGFXa_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/1789939185/TB2diXZi21TBuNjy0FjXXajyXXa_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/1789939185/TB25D87i7SWBuNjSszdXXbeSpXa_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
          },

          {
            "id": 28,
            "name": "网红金箔大理石苹果X手机壳iphone6s/7p/8plus苹果XS MAX全包软壳",
            "desc": "",
            "categoryId": 48,
            "imgList": "https://img.alicdn.com/imgextra/i3/1789939185/O1CN01c3BXx42HimLmrZusJ_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/1789939185/O1CN01GZiJ0J2HimLmrW5fB_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/1789939185/O1CN01jlQXFH2HimLiYAgwX_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/1789939185/O1CN01iLDt4F2HimLjCGPgn_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/1789939185/O1CN015UWKaW2HimLeDqmuM_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/1789939185/O1CN01c3BXx42HimLmrZusJ_!!1789939185.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/1789939185/O1CN01GZiJ0J2HimLmrW5fB_!!1789939185.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/1789939185/O1CN011alO8H2HimLeEOguQ_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/1789939185/O1CN01sN1bJh2HimLkYWM9v_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/1789939185/O1CN018ntmZL2HimLjcSWpv_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/1789939185/O1CN01lVBHL12HimLmP1RRO_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/1789939185/O1CN01BFqOVQ2HimLks9Zot_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/1789939185/O1CN01WfyHbi2HimLlbqWOt_!!1789939185.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
          },

          {
            "id": 29,
            "name": "Apple/苹果 iPhone X 苹果8x 美版日版全网通移动联通电信4G手机",
            "desc": "",
            "categoryId": 48,
            "imgList": "https://img.alicdn.com/imgextra/i3/2277536545/TB2OhvelSfD8KJjSszhXXbIJFXa_!!2277536545.png_640x640q85s150,https://img.alicdn.com/imgextra/i2/2277536545/TB2Uo5FlNrI8KJjy0FpXXb5hVXa_!!2277536545.png_640x640q85s150,https://img.alicdn.com/imgextra/i3/2277536545/TB2.AiJlMvD8KJjy0FlXXagBFXa_!!2277536545.png_640x640q85s150,https://img.alicdn.com/imgextra/i1/2277536545/TB2oUGqlInI8KJjSspeXXcwIpXa_!!2277536545.png_640x640q85s150,https://img.alicdn.com/imgextra/i3/2277536545/TB2OhvelSfD8KJjSszhXXbIJFXa_!!2277536545.png_640x640q85s150,https://img.alicdn.com/imgextra/i2/2277536545/TB2Uo5FlNrI8KJjy0FpXXb5hVXa_!!2277536545.png_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/O1CN011yDeiamTarKnNb9_!!2277536545.png_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2277536545/TB2wjiXlJfJ8KJjy0FeXXXKEXXa_!!2277536545.png_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2277536545/O1CN011yDeiLaXGegs4dE_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2277536545/O1CN01s4tSBL1yDekZ1GKEP_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2277536545/TB2AFK6lJnJ8KJjSszdXXaxuFXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/O1CN01GHlrUT1yDekbPuQpd_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/TB22_SmlS_I8KJjy0FoXXaFnVXa_!!2277536545.png_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2277536545/TB2ON5wlMnH8KJjSspcXXb3QFXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/TB2OVndlTvI8KJjSspjXXcgjXXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2277536545/TB2tOShlL2H8KJjy0FcXXaDlFXa_!!2277536545.png_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2277536545/O1CN01304Zlx1yDekbDRdvB_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/O1CN01vKJpHn1yDeka66cSt_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2277536545/O1CN01UcPYwM1yDekWvQDgN_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/O1CN01vBK6od1yDekaEStKu_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2277536545/TB2LF_alNPI8KJjSspfXXcCFXXa_!!2277536545.png_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2277536545/TB2JItQlRDH8KJjSszcXXbDTFXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2277536545/TB2CRUEkkfb_uJjSsrbXXb6bVXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2277536545/TB235rXlL2H8KJjy1zkXXXr7pXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/TB2FTsujiqAXuNjy1XdXXaYcVXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2277536545/TB2Sx07lN6I8KJjSszfXXaZVXXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/TB23h07lN6I8KJjSszfXXaZVXXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/TB2FfW2lLDH8KJjy1XcXXcpdXXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2277536545/TB2tDFUlMvD8KJjSsplXXaIEFXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/O1CN01WxR9F11yDeka8h3mm_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
          },

          {
            "id": 30,
            "name": "Apple/苹果 iPhone 8 8代4.7 日版美版有锁无锁三网通电信4G手机",
            "desc": "",
            "categoryId": 48,
            "imgList": "https://img.alicdn.com/imgextra/i1/2277536545/TB2vt5ClIjI8KJjSsppXXXbyVXa_!!2277536545.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/2277536545/TB2ninplN6I8KJjy0FgXXXXzVXa_!!2277536545.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2277536545/TB2vGPclL6H8KJjSspmXXb2WXXa_!!2277536545.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2277536545/TB2NJh_lTTI8KJjSsphXXcFppXa_!!2277536545.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2277536545/TB24Ri_lJnJ8KJjSszdXXaxuFXa_!!2277536545.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/2277536545/TB2vt5ClIjI8KJjSsppXXXbyVXa_!!2277536545.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/2277536545/TB2ninplN6I8KJjy0FgXXXXzVXa_!!2277536545.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/O1CN011yDeiamTarKnNb9_!!2277536545.png_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2277536545/O1CN011yDeiLaXGegs4dE_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2277536545/TB27U1rlInI8KJjSspeXXcwIpXa_!!2277536545.png_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2277536545/TB2lCVUlSYH8KJjSspdXXcRgVXa_!!2277536545.png_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2277536545/TB2AFK6lJnJ8KJjSszdXXaxuFXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/TB22_SmlS_I8KJjy0FoXXaFnVXa_!!2277536545.png_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2277536545/TB2Y32klTnI8KJjy0FfXXcdoVXa_!!2277536545.png_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/TB2OVndlTvI8KJjSspjXXcgjXXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2277536545/TB259eMlMvD8KJjy0FlXXagBFXa_!!2277536545.png_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/TB23h07lN6I8KJjSszfXXaZVXXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/TB2FfW2lLDH8KJjy1XcXXcpdXXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2277536545/TB2tDFUlMvD8KJjSsplXXaIEFXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
          },

          {
            "id": 31,
            "name": "Apple/苹果 iPhone 8 Plus 苹果8p 8x 日版美版无锁三网通4G手机",
            "desc": "",
            "categoryId": 48,
            "imgList": "https://img.alicdn.com/imgextra/i4/2277536545/TB2jqfpedHO8KJjSZFHXXbWJFXa_!!2277536545.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2277536545/TB2CEXSlRDH8KJjSszcXXbDTFXa_!!2277536545.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/2277536545/TB2P_X7lJzJ8KJjSspkXXbF7VXa_!!2277536545.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/2277536545/TB2q2jdlMDD8KJjy0FdXXcjvXXa_!!2277536545.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2277536545/TB22RCOlInI8KJjSsziXXb8QpXa_!!2277536545.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/2277536545/TB2jqfpedHO8KJjSZFHXXbWJFXa_!!2277536545.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/2277536545/TB2CEXSlRDH8KJjSszcXXbDTFXa_!!2277536545.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/O1CN011yDeiamTarKnNb9_!!2277536545.png_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2277536545/O1CN011yDeiLaXGegs4dE_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2277536545/TB27U1rlInI8KJjSspeXXcwIpXa_!!2277536545.png_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2277536545/TB2AFK6lJnJ8KJjSszdXXaxuFXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/TB22_SmlS_I8KJjy0FoXXaFnVXa_!!2277536545.png_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2277536545/TB2Gj9elTnI8KJjSszgXXc8ApXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/TB2OVndlTvI8KJjSspjXXcgjXXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2277536545/TB2OA6clNPI8KJjSspfXXcCFXXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/2277536545/TB2CEXSlRDH8KJjSszcXXbDTFXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/2277536545/TB259eMlMvD8KJjy0FlXXagBFXa_!!2277536545.png_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/TB23h07lN6I8KJjSszfXXaZVXXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/2277536545/TB2FfW2lLDH8KJjy1XcXXcpdXXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/2277536545/TB2tDFUlMvD8KJjSsplXXaIEFXa_!!2277536545.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
          },

          {
            "id": 32,
            "name": "苹果XR钢化背膜 iPhoneXR后膜钢化玻璃保护膜xs max改色膜5D",
            "desc": "",
            "categoryId": 48,
            "imgList": "https://img.alicdn.com/imgextra/i4/797245090/O1CN011nTGRweEwJHHpQ3_!!797245090.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/797245090/O1CN01p9nAaK1nTGSc7cO9t_!!797245090.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/797245090/O1CN011nTGRfCWwEODypV_!!797245090.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/797245090/O1CN01vSFC2O1nTGS8wqNk7_!!797245090.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/797245090/O1CN011nTGRjdVCnBjn8s_!!797245090.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/797245090/O1CN011nTGRweEwJHHpQ3_!!797245090.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/797245090/O1CN01p9nAaK1nTGSc7cO9t_!!797245090.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/797245090/O1CN011nTGRkx3Hgj5L0J_!!797245090.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/797245090/O1CN011nTGRk0iCvGmEcz_!!797245090.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/797245090/O1CN01oiVoW91nTGRlIzprD_!!797245090.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/797245090/O1CN011nTGRm9XgMFnr9z_!!797245090.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/797245090/O1CN011nTGRmTLi9q5Ep9_!!797245090.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/797245090/O1CN01Ikg5iW1nTGRn5rLuk_!!797245090.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/797245090/O1CN011nTGRlWjyUqEgjL_!!797245090.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/797245090/O1CN01WfOhmM1nTGRmBGp12_!!797245090.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/797245090/O1CN01CRRfmT1nTGRkx4xgc_!!797245090.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/797245090/O1CN01dx268b1nTGSafAOzd_!!797245090.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
          },

          {
            "id": 33,
            "name": "苹果x极光加厚背膜加边框 iPhonex边框保护套 钢化背膜套餐",
            "desc": "",
            "categoryId": 48,
            "imgList": "https://img.alicdn.com/imgextra/i3/797245090/O1CN011nTGQjo9QThjy0q_!!797245090.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/797245090/O1CN011nTGQkYJ6MhTH9P_!!797245090.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/797245090/O1CN011nTGQlcZDDCfmcD_!!797245090.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/797245090/O1CN011nTGQlgpruPEwqC_!!797245090.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/797245090/O1CN011nTGQm33KMgOvOb_!!797245090.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/797245090/O1CN011nTGQjo9QThjy0q_!!797245090.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/797245090/O1CN011nTGQkYJ6MhTH9P_!!797245090.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/797245090/O1CN011nTGQlGeXJglKT3_!!797245090.gif_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/797245090/O1CN011nTGQk7EKuFIhjY_!!797245090.gif_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/797245090/O1CN011nTGQmo53RlbxeU_!!797245090.gif_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/797245090/O1CN011nTGQlgXXTIkvBS_!!797245090.gif_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/797245090/O1CN011nTGQk7EP4m31yd_!!797245090.gif_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/797245090/O1CN011nTGQkzZcWoaP0a_!!797245090.gif_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/797245090/O1CN011nTGQlGejoh5OsB_!!797245090.gif_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/797245090/O1CN011nTGQmEfx8a3V8Z_!!797245090.gif_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/797245090/O1CN011nTGQkXFF7efzPA_!!797245090.gif_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/797245090/O1CN011nTGQlTvsKRJiZA_!!797245090.gif_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/797245090/O1CN011nTGQlcFPDpjBbB_!!797245090.gif_640x0q85s150_.webp\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
          },

          {
            "id": 34,
            "name": "苹果Xsmax后膜X全屏背膜iphoneXS背面膜xsmax彩膜手机改色贴纸苹果xs钢化玻璃膜xs后盖玻璃膜x前后盖贴膜",
            "desc": "",
            "categoryId": 48,
            "imgList": "https://img.alicdn.com/imgextra/i2/664537797/O1CN0127T4aBKyQEwYH1l_!!664537797.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/664537797/O1CN010o7x4h27T4bgfbzOc_!!0-item_pic.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/664537797/O1CN01NCowrO27T4bhyFdD1_!!664537797.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/664537797/O1CN01fgQdC527T4bgvWeov_!!664537797.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/664537797/O1CN0127T4aAJNC9kIohg_!!664537797.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/664537797/O1CN0127T4aBKyQEwYH1l_!!664537797.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i1/664537797/O1CN010o7x4h27T4bgfbzOc_!!0-item_pic.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/664537797/O1CN01bodwvR27T4bhyGRHh_!!664537797.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/664537797/O1CN011YdLMC27T4bhgypmL_!!664537797.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/664537797/O1CN0127T4aAlNtzySKFQ_!!664537797.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/664537797/O1CN0127T4a8pOJ7IEFW9_!!664537797.jpg\"><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><div class=\"lazyload-placeholder\" style=\"height: 160px;\"></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/664537797/O1CN0127T4aBXak5GCDYu_!!664537797.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/664537797/O1CN0127T4aBKyQEwYH1l_!!664537797.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/664537797/O1CN0127T4a9FlN3AfcDW_!!664537797.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/664537797/O1CN0127T4aBXbDFqsYsd_!!664537797.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/664537797/O1CN0127T4a9zwfDg1Gc2_!!664537797.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/664537797/O1CN0127T4aBKypIjJphs_!!664537797.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/664537797/O1CN0127T4a9FnFajyoOE_!!664537797.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/664537797/O1CN0127T4aAJqCPlKJTA_!!664537797.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
          },

          {
            "id": 35,
            "name": "苹果Xs Max手机壳金属边框真皮iphoneXR全包保护套高端潮韩男女款",
            "desc": "",
            "categoryId": 48,
            "imgList": "https://img.alicdn.com/imgextra/i4/844288764/TB29AksvxSYBuNjSspjXXX73VXa_!!844288764.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/844288764/TB286GGniCYBuNkSnaVXXcMsVXa_!!844288764.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i2/844288764/TB2E12vvv9TBuNjy0FcXXbeiFXa_!!844288764.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/844288764/TB2Y2WwnhuTBuNkHFNRXXc9qpXa_!!844288764.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/844288764/TB2u9nuhBjTBKNjSZFNXXasFXXa_!!844288764.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i4/844288764/TB29AksvxSYBuNjSspjXXX73VXa_!!844288764.jpg_640x640q85s150,https://img.alicdn.com/imgextra/i3/844288764/TB286GGniCYBuNkSnaVXXcMsVXa_!!844288764.jpg_640x640q85s150",
            "propvalueList": "1:2|2:5",
            "detail": "<div class=\"divide-bar\"><span class=\"line\"></span><div class=\"icon-info\"><span class=\"taobao-iconfont \">뉝</span><span class=\"icon-text\">详情</span></div><span class=\"line\"></span></div><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/844288764/TB278T1vuGSBuNjSspbXXciipXa_!!844288764.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/844288764/O1CN012Ebxafk080JK9T8_!!844288764.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/844288764/O1CN012EbxaeHL4n68hss_!!844288764.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/844288764/O1CN012EbxaeCs4W2bL1x_!!844288764.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/844288764/O1CN012EbxaeWntrKCmqg_!!844288764.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i1/844288764/TB2dLBXvTlYBeNjSszcXXbwhFXa_!!844288764.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/844288764/TB2UzngvwmTBuNjy1XbXXaMrVXa_!!844288764.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/844288764/O1CN012EbxafxAotHi6wv_!!844288764.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/844288764/O1CN012EbxadexHWQPKDd_!!844288764.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i3/844288764/O1CN012EbxaXwoQjEId1t_!!844288764.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/844288764/O1CN012Ebxadz9TjHXBtk_!!844288764.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i2/844288764/TB2HAQmvuySBuNjy1zdXXXPxFXa_!!844288764.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/844288764/TB2PSEgvr1YBuNjSszhXXcUsFXa_!!844288764.jpg\"><img class=\"desc-img\" src=\"//img.alicdn.com/imgextra/i4/844288764/TB2zYzWvpOWBuNjy0FiXXXFxVXa_!!844288764.jpg\"><img class=\"desc-img\" src=\"//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp\">"
          }
    ]);

    await models.sku.bulkCreate([{
            itemId: 1,
            propvalueList: '1:2|2:4|3:7',
            propvalueTextList: '红色;S;小',
            quantity: 100,
            price: 20
        },
        {
            itemId: 1,
            propvalueList: '1:2|2:4|3:8',
            propvalueTextList: '红色;S;大',
            quantity: 100,
            price: 20
        },
        {
            itemId: 1,
            propvalueList: '1:2|2:5|3:7',
            propvalueTextList: '红色;M;小',
            quantity: 100,
            price: 20
        },
        {
            itemId: 1,
            propvalueList: '1:2|2:5|3:8',
            propvalueTextList: '红色;M;大',
            quantity: 100,
            price: 20
        },
        {
            itemId: 1,
            propvalueList: '1:3|2:4|3:7',
            propvalueTextList: '白色;S;小',
            quantity: 100,
            price: 50
        },
        {
            itemId: 1,
            propvalueList: '1:3|2:4|3:8',
            propvalueTextList: '白色;S;大',
            quantity: 100,
            price: 50
        },
        {
            itemId: 2,
            propvalueList: '1:2|2:5',
            propvalueTextList: '红色;M',
            quantity: 100,
            price: 50
        },

    ]);

    await models.coupon.bulkCreate([{
            name: '满50减20',
            desc: '满50减20,全场可用',
            limitPrice: 50,
            deductPrice: 20,
            quantity: 20,
            startTime: new Date('2019-2-19'),
            endTime: new Date('2019-3-19')
        },
        {
            name: '无门槛减20',
            desc: '无门槛减20,全场可用',
            limitPrice: 0,
            deductPrice: 20,
            quantity: 20,
            startTime: new Date('2019-2-19'),
            endTime: new Date('2019-3-19')
        }
    ]);

    await models.user_coupon.bulkCreate([{
        "userId": 1,
        "couponId": 1,
        "used": false
    }, {
        "userId": 1,
        "couponId": 2,
        "used": false
    }]);

    await models.region.bulkCreate([{
            id: 1,
            name: '北京市',
        },
        {
            id: 2,
            name: '广东省',
        },
        {
            id: 3,
            name: '北京市',
            parentId: 1
        },
        {
            id: 4,
            name: '深圳市',
            parentId: 2
        },
        {
            id: 5,
            name: '东莞市',
            parentId: 2
        },
        {
            id: 6,
            name: '宝安区',
            parentId: 4
        },
        {
            id: 7,
            name: '福田区',
            parentId: 4
        },
        {
            id: 8,
            name: '罗湖区',
            parentId: 4
        },
        {
            id: 9,
            name: '莞城区',
            parentId: 5
        },
        {
            id: 10,
            name: '东城区',
            parentId: 5
        },
        {
            id: 11,
            name: '东城区',
            parentId: 3
        },
        {
            id: 12,
            name: '西城区',
            parentId: 3
        }
    ]);

    await models.user_addr.bulkCreate([{
        "userId": 1,
        "province": "广东省",
        "provinceId": 2,
        "city": "深圳市",
        "cityId": 4,
        "area": "宝安区",
        "areaId": 6,
        "detailAddr": "樟坑一区",
        "phone": "13686004518",
        "name": "熊健城",
        "isDefault": true
    }]);

    console.log('数据库初始化成功');
}

init();