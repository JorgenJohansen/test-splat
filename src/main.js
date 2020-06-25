import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Signup from './components/views/Signup';
import Login from './components/views/Login';
import Dashboard from './components/views/Dashboard';
import Splat from './components/views/Splat';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {path:'/signup', component: Signup},
  {path:'/login', component: Login},
  {path:'/dashboard', component: Dashboard},
  {path:'/dashboard/splat', component: Splat},
];

const router = new VueRouter({
  routes: routes,
  mode: 'history',
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app');
