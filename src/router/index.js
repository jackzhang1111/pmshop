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
import classify from '@/components/tabbar/classify/index.vue'
import shoppingCart from '@/components/tabbar/shoppingCart/index.vue'
import account from '../components/tabbar/account/index.vue'
import person from '@/components/tabbar/person.vue'
import commodityDetails from '@/components/tabbar/home/commodityDetails.vue'
import evaluaDetails from '@/components/tabbar/home/evaluaDetails.vue'
import footprint from '@/components/tabbar/account/footprint/index.vue'
import confirmOrder from '@/components/confirmOrder/index.vue'
import orderContent from '@/components/confirmOrder/orderContent.vue'
import confirmSuccess from '@/components/confirmOrder/confirmSuccess.vue'
import addBankcar from '@/components/confirmOrder/addBankcar.vue'
import resetPassword from '@/components/confirmOrder/resetPassword.vue'
import passwordSuccess from '@/components/confirmOrder/passwordSuccess.vue'
import parrwordOtp from '@/components/confirmOrder/parrwordOtp.vue'
import favorites from '@/components/tabbar/account/favorites/index.vue'
import search from '@/components/search/index.vue'
import searchRecord from '@/components/search/searchRecord.vue'
import noSearch from '@/components/search/noSearch.vue'
import favoritesGood from '@/components/tabbar/account/favorites/itemComponents/goodList'
import resembleGood from '@/components/tabbar/account/favorites/resembleGood'
import searchGoodsOne from '@/components/search/searchGoodsOne.vue'
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
      path: '/commodityDetails',
      name: '商品详情',
      component: commodityDetails
    },
    {
      path: '/commodityDetails/evaluaDetails',
      name: '商品详情评价',
      component: evaluaDetails
    },
    {
      path: '/footprint',
      name: '我的足迹',
      component: footprint
    },
    {
      path: '/resembleGood',
      name: '找相似商品',
      component: resembleGood
    },
    {
      path: '/search',
      name: '搜索',
      component: search,
      children:[
        {
          path: 'searchRecord',
          name: '历史记录',
          component: searchRecord
        },
        {
          path: 'noSearch',
          name: '无搜索商品',
          component: noSearch
        },
        {
          path: 'favorites/goodsList',
          name: '收藏夹搜索商品',
          component: favoritesGood
        },
        {
          path: 'searchGoodsOne',
          name: '搜索商品1',
          component: searchGoodsOne
        }
      ]
    },
    {
      path: '/confirmOrder',
      name: '确认订单',
      component: confirmOrder,
      children:[
        {
          path: 'orderContent',
          name: '确认订单详情',
          component: orderContent
        },
        {
          path: 'confirmSuccess',
          name: '确认订单提交成功',
          component: confirmSuccess
        },
        {
          path: 'addBankcar',
          name: '添加银行卡',
          component: addBankcar
        },
        {
          path: 'resetPassword',
          name: '重置支付密码',
          component: resetPassword
        },
        {
          path: 'passwordSuccess',
          name: '支付密码设置成功',
          component: passwordSuccess
        },
        {
          path: 'parrwordOtp',
          name: '支付密码输入验证码',
          component: parrwordOtp
        },
      ]
    },
    {
      path: '/control',
      name: '控制',
      component: person,
      children:[
        {
          path: 'home',
          name: '首页',
          component: home
        },
        {
          path:'classify',
          name: '分类',
          component: classify
        },
        {
          path:'shoppingCart',
          name: '购物车',
          component: shoppingCart
        },
        {
          path:'account',
          name: '我的',
          component: account
        }
      ]
    },
    {
      path: '/favorites',
      name: '收藏夹',
      component: favorites
    }
  ]
})
