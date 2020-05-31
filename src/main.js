import Vue from 'vue';
import './plugins/element.js';
import axios from 'axios';
import App from './App.vue';
import store from './store';
import router from './router';

axios.defaults.baseURL = 'https://api.github.com';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
