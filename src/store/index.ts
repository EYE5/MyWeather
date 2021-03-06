import Vue from "vue";
import Vuex from "vuex";
import * as actions from './actions';
import * as mutations from './mutations';
import { state } from './state';

Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  modules: {}
});
