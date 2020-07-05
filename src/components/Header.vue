<template>
  <div>
    <div id="header">
      <h1>Test Splat</h1>
    <router-link to="/" tag="button">Home</router-link> 
    <router-link to="/dashboard" tag="button">Dashboard</router-link> 
    <router-link to="/login" tag="button">Login</router-link> 
    <router-link to="/signup" tag="button" >Sign Up</router-link> 
    <router-link v-if="false" to="/" tag="button">Logout</router-link> 
    </div>
    
    
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  props:[{
    renderHome: status.renderHome,
    renderLogin: status.renderLogin,
    renderSignup: status.renderSignup,
    renderLogout: status.renderLogout,
  }],

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
  color: white;
  margin: 5px;
}

#header{
  display:flex;
  flex-direction: row;
  background: grey;
}

</style>