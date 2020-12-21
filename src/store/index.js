import {createStore} from 'vuex';
import productsModule from './modules/products.js';
import cartModule from './modules/cart.js';

const store = createStore({
 state() {
   return {
     isLoggedIn: false
   };
 },
  modules: {
    prods: productsModule,
    cart: cartModule
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  },
    getters: {
      isAutenticated(state) {
        return state.isLoggedIn;
      },
    },
});

export default store;