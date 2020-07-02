<template>
  <div id="app">
    
    <h1>Test Splat</h1>
    <router-link v-show="renderHome" to="/">Home</router-link> 
    <router-link v-show="renderLogin" to="/login">Login</router-link> 
    <router-link v-show="renderSignup" to="/signup">Sign up</router-link> 
    <router-link v-show="renderLogout" to="/">Logout</router-link> 
    
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  props:['status'],

  data(){
      return{
          
      }
    },
  components: {
    
  }
}
</script>

<style>
h1{
  background: blue;
  color: white;
}
</style>