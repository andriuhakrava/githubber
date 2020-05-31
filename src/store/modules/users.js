import axios from 'axios';

const state = {
  usersList: '',
  singleUser: ''
};

const getters = {
  usersList(state) {
    return state.usersList;
  },
  singleUser(state) {
    return state.singleUser;
  }
};

const mutations = {
  setUsersList(state, payload) {
    state.usersList = payload;
  },
  setSingleUser(state, payload) {
    state.singleUser = payload;
  },
};

const actions = {
  fetchUsers({ commit }) {
    axios.get('/users?per_page=20')
      .then(response => {
        commit('setUsersList', response.data);
        localStorage.setItem('usersList', JSON.stringify(response.data));
    })
  },
  fetchSingleUser({ commit }, payload) {
    axios.get(`/users/${payload}`)
      .then(response => {
        commit('setSingleUser', response.data);
      })
  },
  deleteSingleUser({ commit }) {
    commit('setSingleUser', null);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
