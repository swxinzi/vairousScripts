const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/miniprogram/index/aggregate")) {
    // 顶部功能栏
    // if (obj?.data?.jgArea?.resources?.length > 0) {
    //     let oldList = obj.data.jgArea.resources;
    //     let newList = [];
    //     for (let item of oldList){
    //         if (item.resourceId == '636398'
    //         || item.resourceId == '635778'
    //         || item.resourceId == '635793'
    //         || item.resourceId == '636215'
    //         || item.resourceId == '636222') {
    //             newList.push(item);
    //         }
    //     }
    //
    //     obj.data.jgArea.resources = newList;
    // }

    // 首页推荐栏
    obj.data.secKillingArea = {};
    obj.data.feed = {};
    obj.data.bizArea = {};
}

// 底部导航栏
if (url.includes("/miniprogram/tabbar/all/query ")) {
    if (obj?.data?.length > 0) {
        let oldList = obj.data;
        let newList = [];
        for (let item of oldList){
            if (item.path.includes('mt/mt')
                || item.path.includes('tabs/index')
                || item.path.includes('mine/mine')) {
                newList.push(item);
            }
        }
        obj.data = newList;
    }
}


    $done({body: JSON.stringify(obj)});



