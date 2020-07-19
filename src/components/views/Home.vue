<template>
  <div id="home">
    <Header v-bind:status="[renderHome,renderDashboard,renderLogin,renderSignup,renderLogout,renderUser]" />

    <h1>Hi and welcome to this reqruitment project!</h1>
    <div class="content">
      <h3>Info</h3>
      <p>To use this application, you can go to the buttons displayed with names under and navigate to different user content.</p>
      <p>Here you will be able to create dashboards which contain notes and links to different websites.</p>

      <router-link :to="{name: 'Userpage', params:{username: users[0]}}" 
        tag="button">{{getFirstName(users[0])}}'s place</router-link>
      <router-link :to="{name: 'Userpage', params:{username: users[1]}}" 
        tag="button">{{getFirstName(users[1])}}'s place</router-link>
      <router-link :to="{name: 'Userpage', params:{username: users[2]}}" 
        tag="button">{{getFirstName(users[2])}}'s place</router-link>
      
      
    </div>
    
    
    <Footer />
    <router-view></router-view>
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
          users:["Jørgen Johansen","Cliff","Geralt of Rivia"]
      }
    },
  components: {
    Header,
    Footer,
  }, 
  methods:{
    getFirstName(name){
      let namelist = name.split(" ")
      return namelist[0];
    },

    getUsers(){
      axios.get("http://localhost:4000/api/users")
      .then(res => console.log(res));
    }
  },
  created: function(){
    axios.get("http://localhost:4000/api/users")
    .then(res => console.log(res));
  }
}
</script>

<style scoped>
h1{
  background: grey;
  color: white;
}

.content{
  text-align: center;

}
h3{
  text-decoration: underline;
}


</style>