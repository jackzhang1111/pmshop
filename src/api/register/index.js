import {main, park} from '@/api/index'
//上传图片
export function uploadImgApi(params) {
    return main({
        url:`/h5login/uploadImg`,
        method: 'POST',
        data:params
    })
}