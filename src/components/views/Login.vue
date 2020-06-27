<template>
  <div id="app">
     <h1>Sign in</h1>
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
</style>
