import {main, park} from '@/api/index'
//商品详情
export function productdetailApi(params) {
    return park({
        url:`/appproduct/getproductdetail`,
        method: 'POST',
        data:params
    })
}

//商品评论
export function productevaluationlistApi(params) {
    return park({
        url:`/appproduct/getproductevaluationlist`,
        method: 'POST',
        data:params
    })
}