import {main, park} from '@/api/index'
//订单列表
export function orderlistApi(params) {
    return park({
        url:`/appsaleorder/orderlist`,
        method: 'POST',
        data:params
    })
}

//订单详情
export function orderinfoApi(params) {
    return park({
        url:`/appsaleorder/orderinfo`,
        method: 'POST',
        data:params
    })
}