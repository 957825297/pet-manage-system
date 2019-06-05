import Vue from 'vue'
import Vuex from 'vuex'
import orders from "./store/shopsStore/orders.js";
import users from "./store/systemsStore/users.js";
import petOwnersStore from '../src/store/systemsStore/petOwners';
import shops from '../src/store/systemsStore/shops';
import goodsList from '../src/store/shopsStore/goodsList';
import petService from '../src/store/shopsStore/petService';




Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    orders,
    users,
    petOwnersStore,
    shops,
    goodsList,
    petService
  }
})
