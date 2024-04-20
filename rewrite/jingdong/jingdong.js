const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("unctionId=basic")) {
    if (obj?.JDMiaoSha){
        delete obj.JDMiaoSha;
    }
}

$done({ body: JSON.stringify(obj) });