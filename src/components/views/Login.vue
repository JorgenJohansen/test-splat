<template>
  <div>
      <Header v-bind:status="[renderHome,renderDashboard,renderLogin,renderSignup,renderLogout,renderUser]" />
      <div class="navbar">
        <h1>Sign in</h1>
      </div>
     

     <form>
         <label>Email: </label>
         <input type="email" v-model="email" />
         <label>Password: </label>
         <input type="password" v-model="password" />
         <button>Login</button>
         
     </form>
  </div>
</template>

<script>
import Header from '../Header';

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
          email:"",
          password:"",
      }
    },
  components: {
    Header,
  }
}
</script>

<style>
form{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    
}
input{
    display:block;
    margin: auto;
    
    
}
label{
    margin: 5px;
}
h1{
  text-align: center;
}

.navbar{
  display: flex;
  background: grey;
  justify-content: space-evenly;
}
</style>
