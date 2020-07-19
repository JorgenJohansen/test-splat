<template>
  <div>
    <div id="header">
      <h1>Test Splat</h1>
    <router-link v-if="status[0]" to="/" tag="button">Home</router-link> 
    <router-link v-if="status[2]" to="/login" tag="button">Login</router-link> 
    <router-link v-if="status[3]" to="/signup" tag="button" >Sign Up</router-link> 
    <router-link v-if="status[4]" to="/" tag="button">Logout</router-link> 
    <h3 v-if="status[5]">JJ</h3>
    </div>
    
    
    
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
  color: white;
  margin: 5px;
}

#header{
  display:flex;
  flex-direction: row;
  background: #DC143C;
}

</style>