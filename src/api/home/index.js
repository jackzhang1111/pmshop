import {main, park} from '@/api/index'
//首页
export function homePageApi(params) {
    return park({
        url:`/apphomepage/HomePage`,
        method: 'POST',
        data:params
    })
}