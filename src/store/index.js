import 'babel-polyfill'
import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import auth from './modules/auth';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    login,
    auth
  },
  getters
});

export default store