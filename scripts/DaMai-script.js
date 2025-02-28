const url = $request.url;
if (!$response.body) $done({});
let bodyStr = $response.body;
let result = '';

if (url.includes("/mtop.damai.mec.aristotle")) {
    // 首页
    let obj = JSON.parse(bodyStr);
    if (obj?.data?.nodes?.length > 0) {
        let newNodes = obj.data.nodes;
        for (let node of newNodes){
            if ( node?.data?.nodeId?.includes("948087aa-f753-4367-944f-bf470adf2d8f") ||
            node?.data?.nodeId?.includes("fb3cf36c-ed3f-4787-b20d-fc59ded4ea2d")){
                node.nodes = [];
            }
        }

        obj.data.nodes = newNodes;
        result = JSON.stringify(obj);
    }
}else if (url.includes("mtop.film.pfusercenter.identity.membercenter.get")){
    // 会员中心
    let bodyJsonStr = bodyStr.replace("mtopjsonp1" , "");
    bodyJsonStr     = bodyJsonStr.substring(1,bodyJsonStr.length - 1);
    let obj         = JSON.parse(bodyJsonStr);

    if (obj?.data?.layers?.length > 0?){
        let newLayerList = obj.data.layers;
        for ( let layer of newLayerList){
            if ( layer?.layerId.includes("35e80789-a55c-4dcc-88e2-6989d3ad298f") ||
            layer?.layerId.includes("589bf9e4-347b-492e-b76b-00b14931369b")){
                layer.sections = [];
            }
        }
    }

    result = 'mtopjsonp1(' + JSON.stringify(obj) + ')';
}


$done({ body: result });