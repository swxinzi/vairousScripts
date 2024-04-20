const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("unctionId=basic")) {
    if (obj?.JDMiaoSha){
        delete obj.JDMiaoSha;
    }
}else if (url.includes("functionId=welcomeHome")) {
    if (obj?.floorList) {
        obj.floorList = [];
    }
}

$done({ body: JSON.stringify(obj) });