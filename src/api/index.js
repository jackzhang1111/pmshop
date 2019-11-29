//基础api定义方式
import {mainAxios,parkAxios} from '@/api/http'


var protocol=window.location.protocol;
var host=window.location.host;
var urlHead=protocol+"//"+host;
var urlPk=urlHead+'/api/';

function main(params){
    let base = {
        baseURL:urlPk
    }
    let reqParam = Object.assign({}, base, params)
    return mainAxios(reqParam)
}

function park(params){
    let base = {
        baseURL:urlPk
    }
    let reqParam = Object.assign({}, base, params)
    return parkAxios(reqParam)
}

export {main,park}