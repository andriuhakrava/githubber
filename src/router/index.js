import Vue from 'vue';
import Router from 'vue-router';
import SignIn from '../views/SignIn.vue';
import UsersList from '../components/UsersList.vue';
import UserDetails from '../components/UserDetails.vue';
import store from '../store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'userslist',
      component: UsersList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/user/:id',
      name: 'userdetails',
      component: UserDetails,
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('githubberEmail') && store.state.email !== '') {
      store.dispatch('deleteSingleUser');
      next();
    } else {
      next('/signin');
    }
  } else {
    next();
  }
});

export default router;
