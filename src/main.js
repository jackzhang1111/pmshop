// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'lib-flexible/flexible'
import '@/assets/css/reset.css'
import 'vant/lib/index.css'
import '@/assets/css/common.less'
import './assets/font/font_501137_8uegssallpv/iconfont.css'
import {isDisabled,formValidate,strTrim,objTrim,priceReg,objDeepCopy,deepnull} from '@/common/utils.js'
import store from './store'

Vue.use(Vant);

Vue.prototype.$fn = {
  copy:objDeepCopy,
  isDisabled,
  formValidate,
  strTrim,
  objTrim,
  priceReg,
  deepnull
}

Vue.prototype.$webUrl = "http://192.168.3.161:8091/tospino/test/"


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
