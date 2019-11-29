import {main, park} from '@/api/index'

export function aaa(params) {
    return main({
        // url:'appusercenter/adduseraddress',
        url:'/h5login/h5/login',
        method: 'POST',
        data:params,
    })
}

export function bbb(params) {
    return park({
        // url:'/h5login/h5/login',
        url:'appusercenter/adduseraddress',
        method: 'POST',
        data:params,
    })
}
