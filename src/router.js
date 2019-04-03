import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'dashboard',
      component: Home,
      children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index'),
      }, {
        path: 'anything',
        name: 'anything',
        component: () => import('@/views/anything/index'),
      }, {
        path: 'htmlCss',
        name: 'htmlCss',
        component: () => import('@/views/htmlCss/index'),
      }, {
        path: 'javaScript',
        name: 'javaScript',
        component: () => import('@/views/javaScript/index'),
      }, {
        path: 'life',
        name: 'life',
        component: () => import('@/views/life/index'),
      }, {
        path: 'articleDetail',
        name: 'articleDetail',
        component: () => import('@/views/articleDetail/index'),
      }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
