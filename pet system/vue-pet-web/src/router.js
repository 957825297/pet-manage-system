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
      component: System,
<<<<<<< HEAD
      children:[]
=======
      children: [
        {
          path: 'order',
          name: 'order',
          component: () => import('./components/systems/petOwners/orders.vue')
        }
      ]
>>>>>>> e7d6cd01c29d8e64b017335693bea6b7f6d4a809
    },

    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
