const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);


// 底部导航栏
if (url.includes("/user/functions/list ")) {
    if (obj?.data?.category_list?.length > 0) {
        let oldList = obj.data.category_list;
        let newList = [];
        for (let item of oldList) {
            if (item.cat_title.includes('我的')){
                newList.push(item);
            }
        }
        obj.data.category_list = newList;
    }


    if (obj?.data?.category_listIterator?.length > 0) {
        let oldList = obj.data.category_listIterator;
        let newList = [];
        for (let item of oldList) {
            if (item.cat_title.includes('我的')){
                newList.push(item);
            }
        }
        obj.data.category_listIterator = newList;
    }

    obj.data.my_favorite = {};

}


$done({body: JSON.stringify(obj)});



