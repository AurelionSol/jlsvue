import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  token: window.sessionStorage.getItem("token"),
};

const getters = {
  getToken(state) {
    console.log('return  token=' + state.token);
    return state.token
  },
  isLogin(state) {
    console.log('isLogin  token=' + state.token);
    return !(state.token==null||state.token==='null');
  },
};

const mutations = {
  setToken(state, token) {
    state.token = token;
    window.sessionStorage.setItem("token",token);
    console.log('now token has change, token=' + state.token);
  },
  logout(state){
    state.token = null;
    window.sessionStorage.setItem("token", null);
    console.log('now token has logout, token=' + state.token);
  }
};
const store = new Vuex.Store({
  state,
  getters,
  mutations
});

export default store;
