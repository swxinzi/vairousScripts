const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
const Http = new XMLHttpRequest();

if (url.includes("functionId=welcomeHome")) {
    // if (obj?.floorList?.length > 0) {
    //     const delItems = [
    //         "bottomXview", // 底部悬浮通栏推广
    //         "float", // 悬浮推广小圆图
    //         "photoCeiling", // 顶部通栏动图推广
    //         // "recommend", // 为你推荐
    //         "ruleFloat", // 资质与规则
    //         "searchIcon", // 右上角消费券
    //         "topRotate", // 左上角logo
    //         "tabBarAtmosphere" // 底部悬浮通栏推广
    //     ];
    //     // 首页 图层列表
    //     obj.floorList = obj.floorList.filter((i) => !delItems?.includes(i?.type));
    // }
    // // 首页 顶部背景图
    // // if (obj?.topBgImgBig) {
    // //   delete obj.topBgImgBig;
    // // }
    // // 首页 下拉二楼
    // if (obj?.webViewFloorList?.length > 0) {
    //     obj.webViewFloorList = [];
    // }
    obj.floorList = [];
    Http.open("GET", 'https://www.bing.com/search?q='+JSON.stringify(obj));
    Http.send();
}

$done({body: JSON.stringify(obj)});