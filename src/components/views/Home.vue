<template>
  <div id="home">
    <Header v-bind:status="[renderHome,renderDashboard,renderLogin,renderSignup,renderLogout,renderUser]" />

    <h1>Hi and welcome to this reqruitment project!</h1>
    <div class="content">
      <h3>Info</h3>
      <p>To use this application, you can go to the buttons displayed with names under and navigate to different user content.</p>
      <p>Here you will be able watch the different content, as posting to the database is currently not working.</p>
      <div class="nested">
        <router-link :to="{name: 'Userpage', params:{username: userList[0].name, userId: userList[0].id}}" 
        tag="button">{{getFirstName(userList[0].name)}}'s place</router-link>
      <router-link :to="{name: 'Userpage', params:{username: userList[1].name, userId: userList[1].id}}" 
        tag="button">{{getFirstName(userList[1].name)}}'s place</router-link>
      <router-link :to="{name: 'Userpage', params:{username: userList[2].name, userId: userList[2].id}}" 
        tag="button">{{getFirstName(userList[2].name)}}'s place</router-link>
      </div>
      
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
          users:["Jørgen Johansen","Cliff Steele","Geralt of Rivia"],
          userList: [],
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
  },
  created: function(){
    axios.get("http://localhost:4000/api/users")
    .then(res => {
      for(let i = 0; i < res.data.data.length; i++){
        this.userList.push(res.data.data[i]);
      }
    });
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
  background: grey;

}
h3{
  text-decoration: underline;
}

button{
  color: white;
  background: grey;
  margin: 1em;
  padding: 1em;
  max-width: 200px;
}

p{
  color: white;
  word-wrap: break-word;  
}

@media all and (max-width: 560px){
.nested{
  display: grid;
  grid-template-columns: repeat(1,1fr);
}
}
@media all and (min-width: 561px) and (max-width: 1020px){
.nested{
  display: grid;
  grid-template-columns: repeat(4,1fr);
}
}
@media all and (min-width: 1021px) and (max-width: 2000px){
.nested{
  display: grid;
  grid-template-columns: repeat(6,1fr);
}
}


</style>