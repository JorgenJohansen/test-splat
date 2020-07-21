<template>
  <div id="app">
      <Header v-bind:status="[renderHome,renderDashboard,renderLogin,renderSignup,renderLogout,renderUser]"/>
     <h3>Add a new link for {{$route.params.dashboardTitle}}</h3>
     <form>
         <label>Title: </label>
         <input required type="text" v-model="title" />
         <label>Link: </label>
         <input required type="text" v-model="link" />
         <button @click="goHome">Create link</button>
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
  data(){
      return{
          title:"",
          link:"",
          countryCodes:[],
      }
    },
  components: {
    Header,
    Footer,
  },
  methods:{
      createLink(link){
          if(this.validateLink(link)){
              axios.post("http://localhost:4000/api/dashboards/" + this.$route.params.userId + "/links/", {
                title: this.title,
                link: this.link,
                user_id: this.$route.params.userId,
                dashboard_id: this.$route.params.dashboardId,
        })
        .then(res => console.log(res.title, res.content))
        .catch(err => console.error(err));
         this.goHome();
          }else{
              alert("Link is not valid!")
          }

      },
      validateLink(link){
          let linkList = link.split(".");
          if(linkList[0] !== "www"){
             this.countryCodes.forEach(element => {
              if(element === linkList[2]){
                  return true;
              }
            });
          }
          return false;
          
      },
      goHome() {
          this.$router.push('/')
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

h3{
    text-align:center;
    color: white;
    background: grey;
    margin: 5px;
    padding: 5px;
}
</style>
