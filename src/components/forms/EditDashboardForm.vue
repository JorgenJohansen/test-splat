<template>
  <div id="app">
      <Header v-bind:status="[renderHome,renderDashboard,renderLogin,renderSignup,renderLogout,renderUser]"/>
     <h3>Edit {{$route.params.dashboardTitle}}</h3>
     <form>
         <label>New title: </label>
         <input :placeholder="$route.params.dashboardTitle" required type="text" v-model="title" />
         <button @click="editDashboard">Save</button>
         <button @click="goHome">Cancel</button>
     </form>
     <Footer />
     
  </div>
</template>

<script>
import axios from 'axios';

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
          title:"",
          content:"",
      }
    },
  components: {
    Header,
    Footer,
  },
  methods:{
      editDashboard() {
        axios.patch("http://localhost:4000/api/dashboards/" + this.$route.params.userId, {
          title: this.title
        })
        .then(res => console.log(res.title))
        .catch(err => console.error(err));
         this.goHome();
      },
      goHome() {
          this.$router.push('/')
      }
  }
}
</script>

<style scoped>
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
    text-decoration: underline;
}

h3{
    text-align:center;
    color: white;
    background: grey;
    margin: 5px;
    padding: 5px;
}
</style>