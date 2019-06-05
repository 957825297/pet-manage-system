import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import System from './views/system.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/login/login.vue')
    }
    , {
      path: '/reg',
      name: 'reg',
      component: () => import('./components/reg/reg.vue')
    },
    {
      path: '/',
      name: 'system',
      component: System,
      children: [
        {
          path: 'order',
          name: 'order',
          component: () => import('./components/shops/orders.vue')
        },
        {
          path: 'storeApplication',
          name: 'storeApplication',
          component: () => import('./components/shops/storeApplication.vue')
        },
        {
          path: 'submissionOfInformation',
          name: 'submissionOfInformation',
          component: () => import('./components/shops/submissionOfInformation.vue')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('./components/systems/users/users.vue')
        },
        {
          path: '/petOwners/petOwnersList',
          name: 'petOwners',
          component: () =>import ('./components/systems/petOwners/petOwnersList.vue'),
         },
          {
          path: '/petOwners/searchPetOwners',
          name: 'searchPetOwners',
          component: () =>import ('./components/systems/petOwners/searchPetOwners.vue'),
         },
         {
          path: '/petOwners/addPetOwners',
          name: 'addPetOwners',
          component: () =>import ('./components/systems/petOwners/addPetOwners.vue'),
         },
        {
          path: 'systemsShops',
          name: 'systemsShops',
          component: () => import('./components/systems/shops'),
        },
        {
          path: "/addGoods",
          name: "addGoods",
          component: () => import("./components/shops/goods/addServer.vue")
        },
        {
          path: "/addServer",
          name: "addServer",
          component: () => import("./components/shops/storeSystem/addServer.vue")
        },
        {
          path: "/goodsList",
          name: "goodsList",
          component: () => import("./components/shops/goods/goodsList.vue")
        },
        {
          path: "/serverList",
          name: "serverList",
          component: () => import("./components/shops/storeSystem/goodsList.vue")
        }
      ]
    }
  ]
})
