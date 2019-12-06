import {main, park} from '@/api/index'
//收货地址列表
export function useraddresslistApi(params) {
    return park({
        url:`/appusercenter/getuseraddress`,
        method: 'POST',
        data:params
    })
}

//国家城市列表
export function basearealistApi(params) {
    return park({
        url:`/appusercenter/getbasearealist`,
        method: 'POST',
        data:params
    })
}


//添加用户收货地址
export function adduseraddressApi(params) {
    return park({
        url:`/appusercenter/adduseraddress`,
        method: 'POST',
        data:params
    })
}

//删除用户收货地址信息
export function deladdressApi(params) {
    return park({
        url:`/appusercenter/deleteuseraddress`,
        method: 'POST',
        data:params
    })
}