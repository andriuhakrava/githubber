import router from '../../router';

const state = {
  email: '',
  password: ''
};

const mutations = {
  setUseremail(state, payload) {
    state.email = payload;
  },
  setUserpass(state, payload) {
    state.password = payload;
  }
};

const actions = {
  loginUser({ commit }) {
    commit('setUseremail', localStorage.getItem('githubberEmail'))
    commit('setUserpass', localStorage.getItem('githubberPassword'));
    router.push('/');
  }
};

export default {
  state,
  mutations,
  actions
};
