<template>
  <div id="home">
    <Header v-bind:status="[renderHome,renderDashboard,renderLogin,renderSignup,renderLogout,renderUser]" />

    <h1>Hi and welcome to this test project</h1>
    <h3>Info</h3>
    <p>To use this application you can go to <router-link to="/dashboard">this link</router-link> to view notes and links.</p>
    <p>If you want to create your own links/notes within your own dashboard, 
        you have to signup or login.</p>
    
    <Footer />
    <router-view></router-view>
  </div>
</template>

<script>

import Header from '../Header';
import Footer from '../Footer';
export default {

  props:{
    renderHome:{
      type:Boolean
    },
    renderDashboard:{
      type:Boolean
    },
    renderLogin:{
      type:Boolean
    },
    renderSignup:{
      type:Boolean
    },
    renderLogout:{
      type:Boolean
    },
    renderUser:{
      type:Boolean
    },
  },

  data(){
      return{
          
      }
    },
  components: {
    Header,
    Footer,
  }
}
</script>

<style scoped>
h1{
  background: grey;
  color: white;
}
</style>