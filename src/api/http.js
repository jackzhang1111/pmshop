import axios from 'axios';
// import main from '@/main.js'
import Qs from 'qs'
//form Data格式
const mainAxios = axios.create({
    timeout: 10000,
    headers: {
        "Content-Type": 'application/x-www-form-urlencoded;charset="utf-8" '
    },
    withCredentials: true,
});

const parkAxios = axios.create({
    timeout: 10000,
    headers: {
        'Content-Type':'application/json;charset=utf-8'
    },
    withCredentials: true,
});


// 添加请求拦截器
mainAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.transformRequest = [function (data) {
        // 在请求之前对data传参进行格式转换
        data = Qs.stringify(data)
        return data
    }];
    return config;

    }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


// 添加请求拦截器
parkAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.transformRequest = [function (data) {
        // 在请求之前对data传参进行格式转换
        data = JSON.stringify(data)
        return data
    }];
    return config;

    }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


// 添加响应拦截器
mainAxios.interceptors.response.use(function (response) {
    let { noError = true } =  response.config

    if (noError) {
        // if (response.data.meta.code == 500) {
        //     response.data.meta.message = "网络繁忙，请稍后再试！"
        // }
        // let code = response.data.meta.code
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    // if (error.response) {
    //     let { auth = true } =  error.response.config

    //     if (error.response.status == 401 && auth) {
    //         console.log(401);
    //         // redirect()
    //     } else if (error.response.status == 402) {
    //         console.log(402);
    //         // redirect()
    //     }
    // } else {
    //     let { noError = true } = error.response.config
    //     if (!noError) {
    //         if (error.message.indexOf('timeout') != -1) {
    //             // main.$toast('请求超时，请稍后再试！')
    //         }
    //         if (error.message.indexOf('Network Error') != -1) {
    //             // main.$toast('服务端未响应，请稍后再试！！')
    //         }
    //     }


    // }

    return Promise.reject(error);
});

// 添加响应拦截器
parkAxios.interceptors.response.use(function (response) {
    let { noError = true } =  response.config

    if (noError) {
        // if (response.data.meta.code == 500) {
        //     response.data.meta.message = "网络繁忙，请稍后再试！"
        // }
        // let code = response.data.meta.code
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    // if (error.response) {
    //     let { auth = true } =  error.response.config

    //     if (error.response.status == 401 && auth) {
    //         console.log(401);
    //         // redirect()
    //     } else if (error.response.status == 402) {
    //         console.log(402);
    //         // redirect()
    //     }
    // } else {
    //     let { noError = true } = error.response.config
    //     if (!noError) {
    //         if (error.message.indexOf('timeout') != -1) {
    //             // main.$toast('请求超时，请稍后再试！')
    //         }
    //         if (error.message.indexOf('Network Error') != -1) {
    //             // main.$toast('服务端未响应，请稍后再试！！')
    //         }
    //     }


    // }

    return Promise.reject(error);
});





export {mainAxios,parkAxios}
