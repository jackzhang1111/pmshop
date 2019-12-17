import {main, park} from '@/api/index'
//确认订单订单详情
export function getconfirmorderApi(params) {
    return park({
        url:`/appsaleorder/getconfirmorder`,
        method: 'POST',
        data:params
    })
}