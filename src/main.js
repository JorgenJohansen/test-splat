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
  {
    path:'/', 
    name: "Home", 
    component: Home,
    props:{
      renderHome: true,
      renderDashboard: true,
      renderLogin: true,
      renderSignup: true,
      renderLogout: false,
      renderUser: false,
    }
  },
  {
    path:'/signup', 
    name: "Signup", 
    component: Signup,
    props:{
      renderHome: true,
      renderDashboard: true,
      renderLogin: true,
      renderSignup: false,
      renderLogout: false,
      renderUser: false,
    }
  },
  {
    path:'/login', 
    name: "Login", 
    component: Login,
    props:{
      renderHome: true,
      renderDashboard: true,
      renderLogin: false,
      renderSignup: true,
      renderLogout: false,
      renderUser: false,
    }
  },
  {
    path:'/dashboard', 
    name: "Dashboard", 
    component: Dashboard,
    props:{
      renderHome: true,
      renderDashboard: true,
      renderLogin: false,
      renderSignup: false,
      renderLogout: true,
      renderUser: true,
    }
  },
  {
    path:'/dashboard/splat/:id', 
    name: "Splat", 
    component: Splat,
    props:{
      renderHome: true,
      renderDashboard: true,
      renderLogin: false,
      renderSignup: false,
      renderLogout: true,
      renderUser: true,
    }
  },
  {
    path:'/note', 
    name: "NoteForm", 
    component: NoteForm,
    props:{
      renderHome: true,
      renderDashboard: true,
      renderLogin: false,
      renderSignup: false,
      renderLogout: true,
      renderUser: true,
    }
  },
  {
    path:'/link', 
    name: "LinkForm", 
    component: LinkForm,
    props:{
      renderHome: true,
      renderDashboard: true,
      renderLogin: false,
      renderSignup: false,
      renderLogout: true,
      renderUser: true,
    }
  },
  {
    path:'*', 
    component: Missing, 
    props:{
      renderHome: true,
      renderDashboard: false,
      renderLogin: false,
      renderSignup: false,
      renderLogout: false,
      renderUser: false,
    }
  },
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
