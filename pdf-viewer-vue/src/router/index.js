import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/modulePdf',
      meta: {
        title: '思特威文档浏览系统'
      }
    },
    {
      path: '/modulePdf',
      name: 'ModulePdf',
      component: resolve => require(['@/pages/ModulePdf'], resolve),
      meta: {
        title: '思特威文档浏览系统'
      }
    },
    {
      path: '/module2',
      name: 'Module2',
      component: resolve => require(['@/pages/Module2'], resolve)
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 路由发生变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
