import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import files from './files'

Vue.config.productionTip = false

Vue.use(ElementUI)

// pdf文件名
Vue.prototype.$files = files

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
