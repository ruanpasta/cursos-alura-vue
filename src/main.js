import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate';
import msg from './pt_BR';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/test.css'
import './assets/js/test';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);

Vue.use(VeeValidate, {
  locale: 'pt_Br',
  dictionary: {
    pt_Br: {
      messages: msg
    }
  }
});

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
