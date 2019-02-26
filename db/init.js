const db = require('./index');
const {
    models
} = db;

async function init() {


    await db.sync({
        force: true
    });

    let data = [];
    for (let i = 1; i < 21; i++) {
        data.push({
            id: i,
            name: `女装${i}`,
        });
    }
    for (let i = 21; i < 31; i++) {
        data.push({
            id: i,
            name: `连衣裙${i}`,
            parentId: 1,
            img: 'https://gw.alicdn.com/tps/O1CN010UEJYr2LZr5vK81e0_!!3393239707.jpg_140x10000Q75.jpg'
        });
    }
    for (let i = 31; i < 41; i++) {
        data.push({
            id: i,
            name: `连衣裙${i}`,
            parentId: 15,
            img: 'https://gw.alicdn.com/tps/O1CN010UEJYr2LZr5vK81e0_!!3393239707.jpg_140x10000Q75.jpg'
        });
    }
    await models.category.bulkCreate(data);

    await models.user.bulkCreate([{
        id: 1,
        phone: '13686004518',
        password: '123456',
        avatar: 'https://avatars0.githubusercontent.com/u/15243456?s=460&v=4',
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
        },{
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
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8zXvIMUYrx_!!2296669517.jpg,http:////img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8xJFj4YeHo_!!2296669517.jpg,http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8xJFj4YeHo_!!2296669517.jpg',
            propvalueList: '1:2,3|2:4,5,6|3:7,8',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },
        {
            id: 2,
            name: '好看的歇裙春秋装2',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },
        {
            id: 3,
            name: '好看的歇裙春秋装3',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },{
            id: 4,
            name: '好看的歇裙春秋装4',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },{
            id: 5,
            name: '好看的歇裙春秋装5',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },{
            id: 6,
            name: '好看的歇裙春秋装6',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },{
            id: 7,
            name: '好看的歇裙春秋装7',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },{
            id: 8,
            name: '好看的歇裙春秋装8',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },{
            id: 9,
            name: '好看的歇裙春秋装9',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },{
            id: 10,
            name: '好看的歇裙春秋装10',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },
        {
            id: 11,
            name: '好看的歇裙春秋装11',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },
        {
            id: 12,
            name: '好看的歇裙春秋装12',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },{
            id: 13,
            name: '好看的歇裙春秋装13',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },{
            id: 14,
            name: '好看的歇裙春秋装14',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },{
            id: 15,
            name: '好看的歇裙春秋装15',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },{
            id: 16,
            name: '好看的歇裙春秋装16',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },{
            id: 17,
            name: '好看的歇裙春秋装17',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },{
            id: 18,
            name: '好看的歇裙春秋装18',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },{
            id: 19,
            name: '好看的歇裙春秋装19',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },{
            id: 20,
            name: '好看的歇裙春秋装20',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },
    ]);

    await models.sku.bulkCreate([{
            itemId: 1,
            propvalueList: '1:2|2:4|3:7',
            propvalueTextList:'红色;S;小',
            quantity: 100,
            price: 20
        },
        {
            itemId: 1,
            propvalueList: '1:2|2:4|3:8',
            propvalueTextList:'红色;S;大',
            quantity: 100,
            price: 20
        },
        {
            itemId: 1,
            propvalueList: '1:2|2:5|3:7',
            propvalueTextList:'红色;M;小',
            quantity: 100,
            price: 20
        },
        {
            itemId: 1,
            propvalueList: '1:2|2:5|3:8',
            propvalueTextList:'红色;M;大',
            quantity: 100,
            price: 20
        },
        {
            itemId: 1,
            propvalueList: '1:3|2:4|3:7',
            propvalueTextList:'白色;S;小',
            quantity: 100,
            price: 50
        },
        {
            itemId: 1,
            propvalueList: '1:3|2:4|3:8',
            propvalueTextList:'白色;S;大',
            quantity: 100,
            price: 50
        },
        {
            itemId: 2,
            propvalueList: '1:2|2:5',
            propvalueTextList:'红色;M',
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