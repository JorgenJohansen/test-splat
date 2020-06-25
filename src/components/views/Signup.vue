<template>
  <div id="app">
     <h1>Sign up</h1>
     <form>
         <label>Name: </label>
         <input type="text" v-model="name" />
         <label>Age: </label>
         <input type="text" v-model="age" />
         <label>Email: </label>
         <input type="email" v-model="email" />
         <label>Password: </label>
         <input type="password" v-model="password" />
         
     </form>
  </div>
</template>

<script>


export default {
  data(){
      return{
          name: "",
          age:"",
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
