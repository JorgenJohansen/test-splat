<template>
  <div id="app">
      <Header v-bind:status="[renderHome,renderDashboard,renderLogin,renderSignup,renderLogout,renderUser]"/>
     <h3>Add a new Dashboard for {{$route.params.userpageTitle}}</h3>
     <form>
         <label>Title: </label>
         <input placeholder="Add a title here" required type="text" v-model="title" />
         <button @click="createDashboard">Create dashboard {{title}}</button>
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
      }
    },
  components: {
    Header,
    Footer,
  },
  methods:{
      createDashboard() {
          axios.post("http://localhost:4000/api/dashboards/",{
              title: this.title,
              userId: this.$route.params.userId,
          })
          .then(res => console.log("Title: " + res.title + ", UserId: " + res.userId))
          .catch(err => console.error(err));
          this.goHome();
      },
      goHome() {
          this.$router.push('/');
      }
  },
  created(){
    console.log(this.title);
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