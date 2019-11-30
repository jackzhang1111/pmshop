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
// import { Toast } from 'vant';
import {isDisabled,formValidate,strTrim,objTrim,priceReg,objDeepCopy} from '@/common/utils.js'


Vue.use(Vant);

Vue.prototype.$fn = {
  copy:objDeepCopy,
  isDisabled,
  formValidate,
  strTrim,
  objTrim,
  priceReg
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
