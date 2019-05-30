import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import System from './views/system.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'system',
      component: System
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
