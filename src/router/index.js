import Vue from 'vue';
import VueRouter from 'vue-router';
import CovidData from '../views/CovidData.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Total',
    },
    {
      path: '/:id',
      name: 'korea',
      component: CovidData,
    },
  ],
});
