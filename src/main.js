import Vue from 'vue';
import App from './App.vue';
import vueMoment from 'vue-moment';
import { store } from './store/index.js';
import { router } from './router/index.js';

Vue.config.productionTip = false;

Vue.use(vueMoment);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
