import 'babel-polyfill'
import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import auth from './modules/auth';
import refresh from './modules/refresh';
import loan from './modules/loan';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    auth,
    refresh,
    loan
  },
  getters
});

export default store