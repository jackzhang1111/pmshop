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

//取消订单
export function revokeorderApi(params) {
    return park({
        url:`/appsaleorder/revokeorder`,
        method: 'POST',
        data:params
    })
}

//订单发起支付
export function orderlaunchpayApi(params) {
    return park({
        url:`/appsaleorder/orderlaunchpay`,
        method: 'POST',
        data:params
    })
}

//支付方式列表
export function getonlinepaytypelistApi(params) {
    return park({
        url:`/appsaleorder/getonlinepaytypelist`,
        method: 'POST',
        data:params
    })
}