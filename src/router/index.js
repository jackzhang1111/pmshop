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
import myOrder from '@/components/tabbar/account/myOrder/index'
import editAddress from '@/components/tabbar/account/myOrder/editAddress'
import orderTitle from '@/multiplexing/orderTitle'
import orderDetail from '@/components/tabbar/account/myOrder/orderDetail'
import addressList from '@/components/tabbar/account/myOrder/addressList'
import addAdderss from '@/components/tabbar/account/myOrder/addAdderss'
import refund from '@/components/tabbar/account/myOrder/refund'
import afterSales from '@/components/tabbar/account/afterSales/index'
import afterSalesContent from '@/components/tabbar/account/afterSales/afterSalesContent'
import afterSalesDetail from '@/components/tabbar/account/afterSales/afterSalesDetail'
import afterSalesSteps from '@/components/tabbar/account/afterSales/afterSalesSteps'
import evaluate from '@/components/tabbar/account/evaluate/index'
import noShopping from '@/components/tabbar/account/evaluate/noShopping'
import evaluateList from '@/components/tabbar/account/evaluate/evaluateList'
import expressedEvaluate from '@/components/tabbar/account/evaluate/expressedEvaluate'
import appendEvaluate from '@/components/tabbar/account/evaluate/appendEvaluate'
import evaluateSuccess from '@/components/tabbar/account/evaluate/evaluateSuccess'
import evaluateDetail from '@/components/tabbar/account/evaluate/evaluateDetail'

import accountSettings from '@/components/tabbar/account/accountSettings/index'
import accountAddress from '@/components/tabbar/account/accountSettings/accountAddress'
import addAddress from '@/components/tabbar/account/accountSettings/addAddress'
import accountSecurity from '@/components/tabbar/account/accountSettings/accountSecurity'
import editName from '@/components/tabbar/account/accountSettings/editName'
import editPhone from '@/components/tabbar/account/accountSettings/editPhone'
import acceptOtp from '@/components/tabbar/account/accountSettings/acceptOtp'
import editEmail from '@/components/tabbar/account/accountSettings/editEmail'
import editLogpawo from '@/components/tabbar/account/accountSettings/editLogpawo'
import editPaypawo from '@/components/tabbar/account/accountSettings/editPaypawo'




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
      path: '/myOrder',
      name: '我的订单',
      component: myOrder,
    },
    {
      path: '/evaluate',
      name: '评价',
      component: evaluate,
      children:[
        {
          path: 'noShopping',
          name: '评价没有购物',
          component: noShopping,
        },
        {
          path: 'evaluateList',
          name: '评价列表',
          component: evaluateList,
        },
        {
          path: 'evaluateSuccess',
          name: '评价成功',
          component: evaluateSuccess,
        },
        {
          path: 'evaluateDetail',
          name: '评价详情',
          component: evaluateDetail,
        },
      ]
    },
    {
      path: '/evaluate/evaluateList/expressedEvaluate',
      name: '发表评价',
      component: expressedEvaluate,
    },
    {
      path: '/evaluate/evaluateList/appendEvaluate',
      name: '追加评价',
      component: appendEvaluate,
    },


    {
      path: '/accountSettings',
      name: '账户设置',
      component: accountSettings,
    },
    {
      path: '/accountSettings/accountAddress',
      name: '收货地址',
      component: accountAddress,
    },
    {
      path: '/accountSettings/accountAddress/addAddress',
      name: '新增地址',
      component: addAddress,
    },
    {
      path: '/accountSettings/accountSecurity',
      name: '账户安全',
      component: accountSecurity,
    },
    {
      path: '/accountSettings/accountSecurity/editName',
      name: '修改昵称',
      component: editName,
    },
    {
      path: '/accountSettings/accountSecurity/editPhone',
      name: '修改手机号码',
      component: editPhone,
    },
    {
      path: '/accountSettings/accountSecurity/editPhone/acceptOtp',
      name: '接受验证码',
      component: acceptOtp,
    },
    {
      path: '/accountSettings/accountSecurity/editEmail',
      name: '修改邮箱',
      component: editEmail,
    },
    {
      path: '/accountSettings/accountSecurity/editLogpawo',
      name: '修改登录密码',
      component: editLogpawo,
    },
    {
      path: '/accountSettings/accountSecurity/editPaypawo',
      name: '修改支付密码',
      component: editPaypawo,
    },
    



    {
      path: '/afterSales',
      name: '售后',
      component: afterSales,
      children:[
        {
          path: 'afterSalesContent',
          name: '售后内容',
          component: afterSalesContent,
        },
        {
          path: 'afterSalesContent/afterSalesDetail',
          name: '售后详情',
          component: afterSalesDetail,
        },
        {
          path: 'afterSalesContent/afterSalesDetail/afterSalesSteps',
          name: '售后流程',
          component: afterSalesSteps,
        }
      ]
    },
    {
      path: '/myOrder/orderTitle',
      name: '我的订单详情头部',   
      component: orderTitle,
      children:[
        {
          path: 'editAddress',
          name: '我的订单修改地址',   
          component: editAddress,
        },
        {
          path: 'editAddress/addressList',
          name: '地址列表',   
          component: addressList,
        },
        {
          path: 'editAddress/addressList/addAdderss',
          name: '新增地址',   
          component: addAdderss,
        },
        {
          path: 'orderDetail',
          name: '订单详情',   //我的订单,订单详情
          component: orderDetail,
        },
        {
          path: 'orderDetail/refund',
          name: '退货退款页面',   
          component: refund,
        },
      ]
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
