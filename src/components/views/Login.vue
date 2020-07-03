<template>
  <div>
      <div class="navbar">
        <h1>Sign in</h1>
        <router-link to="/" tag="button">Home</router-link>
      </div>
     

     <form>
         <label>Email: </label>
         <input type="email" v-model="email" />
         <label>Password: </label>
         <input type="password" v-model="password" />
         <button>Login</button>
         <router-link to="/" tag="button">Home</router-link>
         
     </form>
  </div>
</template>

<script>


export default {
  data(){
      return{
          email:"",
          password:"",
      }
    },
  components: {
    
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
