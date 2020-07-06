<template>
  <div>
    <Header v-bind:status="[renderHome,renderDashboard,renderLogin,renderSignup,renderLogout,renderUser]" />
     <div class="navbar">
        <h1>Sign up</h1>
      </div>
     <form>
         <label>Name: </label>
         <input required type="text" v-model="name" />
         <label>Age: </label>
         <input required type="text" v-model="age" />
         <label>Email: </label>
         <input required type="email" v-model="email" />
         <label>Password: </label>
         <input required type="password" v-model="password" />
         <button>Register {{name}}</button>
         
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
          name: "",
          age:"",
          email:"",
          password:"",
      }
    },
  components: {
    Header,
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

.navbar{
  display: flex;
  background: grey;
  justify-content: space-evenly;
}

</style>
