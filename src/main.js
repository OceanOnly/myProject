// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import i18n from './i18n/'
import $ from 'jquery'
import API from '@/utils/api'
Vue.prototype.$API = API
Vue.use(Element)
Vue.config.productionTio = false; 
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})

