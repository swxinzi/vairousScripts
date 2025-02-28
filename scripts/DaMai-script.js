const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/mtop.damai.mec.aristotle")) {
    // 首页
    if (obj?.data?.nodes?.length > 0) {
        let newNodes = obj.data.nodes;
        for (let node of newNodes){
            if ( node?.data?.nodeId?.includes("948087aa-f753-4367-944f-bf470adf2d8f")){
                node.nodes = [];
            }
        }

        obj.data.nodes = newNodes;
    }
}


$done({ body: JSON.stringify(obj) });