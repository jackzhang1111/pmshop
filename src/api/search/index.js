import {main, park} from '@/api/index'
//搜索商品
export function searchGoodApi(params) {
    return park({
        url:`/apphomepage/getkeynamelist`,
        method: 'POST',
        data:params
    })
}

//历史记录
export function searchHistoryApi(params) {
    return park({
        url:`/appbrowserachistory/getsearchnamelist`,
        method: 'POST',
        data:params
    })
}

//搜索商品
export function searchProductApi(params) {
    return park({
        url:`/apphomepage/getproductlist`,
        method: 'POST',
        data:params
    })
}