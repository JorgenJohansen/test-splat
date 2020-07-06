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
import Missing from './components/Missing';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {path:'/', name: "Home", component: Home},
  {path:'/signup', name: "Signup", component: Signup},
  {path:'/login', name: "Login", component: Login},
  {path:'/dashboard', name: "Dashboard", component: Dashboard},
  {path:'/dashboard/splat/:id', name: "Splat", component: Splat},
  {path:'/note', name: "NoteForm", component: NoteForm},
  {path:'/link', name: "LinkForm", component: LinkForm},
  {path:'*', component: Missing}
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
