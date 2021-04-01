import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission'
import './asset/style'
import './component'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import {
  isMobile
} from './util/index'

// 全局方法挂在
Vue.prototype.$isMobile = isMobile

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'medium' // set element-ui default size
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')