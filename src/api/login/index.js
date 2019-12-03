import {main, park} from '@/api/index'

export function loginApi(params) {
    return park({
        url:'/h5login/h5/login',
        method: 'POST',
        data:params,
        aaa:true
    })
}


export function loginApi2(params) {
    return park({
        url:'/h5login/h5/login',
        method: 'POST',
        data:params,
        aaa:false
    })
}


