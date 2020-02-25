import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/index.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

export default router
