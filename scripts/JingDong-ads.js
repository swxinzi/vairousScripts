const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("functionId=readCustomSurfaceList")) {
    // 底部导航栏   黑暗模式
    if (obj?.result?.modeMap?.dark?.navigationAll.length > 0) {
        let newNavigationList = [];
        let navigationList = obj.result.modeMap.dark.navigationAll;
        for (let item of navigationList){
            if (item.functionId != 'index' || item.functionId != 'cart' || item.functionId != 'home') {
                continue;
            }
            newNavigationList.push(item);
        }

        obj.result.modeMap.dark.navigationAll = newNavigationList;
    }

    // 底部导航栏   普通模式
    if (obj?.result?.modeMap?.normal?.navigationAll.length > 0) {
        let newNavigationList = [];
        let navigationList = obj.result.modeMap.normal.navigationAll;
        for (let item of navigationList){
            if (item.functionId != 'index' || item.functionId != 'cart' || item.functionId != 'home') {
                continue;
            }
            newNavigationList.push(item);
        }

        obj.result.modeMap.normal.navigationAll = newNavigationList;
    }
}


$done({ body: JSON.stringify(obj) });