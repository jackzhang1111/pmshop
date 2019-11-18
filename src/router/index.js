import Vue from 'vue'
import Router from 'vue-router'
import guidePage from '@/components/guidePage/index.vue'
import login from '@/components/login/index.vue'
import forgetPassword from '@/components/login/forgetPassword/index.vue'
import otp from '@/components/login/forgetPassword/otp.vue'
import forgeSuccess from '@/components/login/forgetPassword/forgeSuccess.vue'
import revisePassword from '@/components/login/forgetPassword/revisePassword.vue'
import register from '@/components/login/register/index.vue'
import home from '@/components/tabbar/home/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '引导页',
      component: guidePage
    },
    {
      path: '/login',
      name: '登录',
      component: login,
    },
    {
      path: '/otp',
      name: '验证码',
      component: otp
    },
    {
      path: '/forgetPassword',
      name: '忘记密码',
      component: forgetPassword,
      children:[
        
      ]
    },
    {
      path: '/forgeSuccess',
      name: '修改密码成功',
      component: forgeSuccess
    },
    {
      path: '/revisePassword',
      name: '修改密码',
      component: revisePassword
    },
    {
      path: '/register',
      name: '注册',
      component: register
    },
    {
      path: '/home',
      name: '首页',
      component: home
    }
  ]
})
