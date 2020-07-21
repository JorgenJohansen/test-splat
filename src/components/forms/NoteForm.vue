<template>
  <div id="app">
      <Header v-bind:status="[renderHome,renderDashboard,renderLogin,renderSignup,renderLogout,renderUser]"/>
     <h3>Add a new note for {{$route.params.dashboardTitle}}</h3>
     <form>
         <label>Title: </label>
         <input placeholder="Add a title here" required type="text" v-model="title" />
         <label>Note: </label>
         <textarea placeholder="What are you thinking about today?" rows="5" cols="5" required type="text" v-model="content" />
         <button @click="goHome">Create note</button>
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
      createNote() {
          axios.post("http://localhost:4000/api/dashboards/" + this.$route.params.userId + "/notes/", {
            title: this.title,
            content: this.content,
            user_id: this.$route.params.userId,
            dashboard_id: this.$route.params.dashboardId,
        })
        .then(res => console.log(res.title, res.content))
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
