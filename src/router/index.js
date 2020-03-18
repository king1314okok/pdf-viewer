import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/pdfPage',
      meta: {
        title: '思特威文档浏览系统'
      }
    },
    {
      path: '/pdfPage',
      name: 'PdfPage',
      component: resolve => require(['@/pages/PdfPage'], resolve),
      meta: {
        title: '思特威文档浏览系统'
      }
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
