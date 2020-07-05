import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Signup from './components/views/Signup';
import Login from './components/views/Login';
import Dashboard from './components/views/Dashboard';
import Splat from './components/views/Splat';
import Home from './components/views/Home';
import NoteForm from './components/forms/NoteForm';
import LinkForm from './components/forms/LinkForm';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {path:'/', component: Home},
  {path:'/signup', component: Signup},
  {path:'/login', component: Login},
  {path:'/dashboard', component: Dashboard},
  {path:'/dashboard/splat', component: Splat},
  {path:'/note', component: NoteForm},
  {path:'/link', component: LinkForm},

  
];

const router = new VueRouter({
  routes: routes,
  //history gets rid of the hash
  mode: 'history',
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app');
