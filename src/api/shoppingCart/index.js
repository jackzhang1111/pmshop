import {main, park} from '@/api/index'
//添加购物车
export function addshopcartApi(params) {
    return park({
        url:`/apporder/addshopcart`,
        method: 'POST',
        data:params
    })
}