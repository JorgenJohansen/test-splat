<template>
  <div id="app">
     <h1>Sign up</h1>
     <form>
         <label>Name: </label>
         <input required type="text" v-model="name" />
         <label>Age: </label>
         <input required type="text" v-model="age" />
         <label>Email: </label>
         <input required type="email" v-model="email" />
         <label>Password: </label>
         <input required type="password" v-model="password" />
         <button>Register user</button>
         
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
    
  },
  methods:{
    makeUser: function(){
      return {
        name: this.name,
        age: this.age,
        email: this.email,
        password: this.password,
      }
    }

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

button{
  display: block;
  margin:  10px auto;
}

</style>
