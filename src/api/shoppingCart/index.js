import {main, park} from '@/api/index'
//添加购物车
export function addshopcartApi(params) {
    return park({
        url:`/apporder/addshopcart`,
        method: 'POST',
        data:params
    })
}
//购物车列表
export function shopcartlistApi(params) {
    return park({
        url:`/apporder/getshopcartlist`,
        method: 'POST',
        data:params
    })
}