import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/pdfPage'
    },
    {
      path: '/pdfPage',
      name: 'PdfPage',
      component: resolve => require(['@/pages/PdfPage'], resolve)
    }
  ]
})

export default router
