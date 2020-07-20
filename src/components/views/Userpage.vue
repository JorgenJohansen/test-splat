<template>
  <div id="app">
    <Header v-bind:status="[renderHome,renderDashboard,renderLogin,renderSignup,renderLogout,renderUser]"/>
     <h1>{{name}}</h1>

      <div class="add">
        <router-link :to="{name: 'CreateDashboard', params:{userpageTitle: title}}" 
        tag="button">Add a new Dashboard</router-link>
      </div>
     

     <div v-if="dashboardList.length == 0" class="wrapper">
       <div  class="link" v-for="dashboard in dummyDashboards" :key="dashboard.title">
         <router-link :to="{
           name: 'Dashboard', params:{title: dashboard.title, dashboardId: dashboard.id, userId: dashboard.userId}}" tag="button">{{dashboard.title}}</router-link>
       </div>
     </div>
     <div v-else class="wrapper">
       <div  class="link" v-for="dashboard in dashboardList" :key="dashboard.title">
         <router-link :to="{
           name: 'Dashboard', params:{title: dashboard.title, dashboardId: dashboard.id, userId: dashboard.userId}}" tag="button">{{dashboard.title}}</router-link>
       </div>
     </div>

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
          name: this.$route.params.username,
          dashboardList: [],
          dummyDashboards:[
              {
                  title:"Dashboard 1",
                  id: 1,
                  userId: 1
              },
              {
                  title:"Dashboard 2",
                  id: 1,
                  userId: 1
              },
              {
                  title:"Dashboard 3",
                  id: 2,
                  userId: 2
              },
              {
                  title:"Dashboard 4",
                  id: 2,
                  userId: 2
              },
              {
                  title:"Dashboard 5",
                  id: 3,
                  userId: 3
              },
              
          ]
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
    }
  },
  created: function(){
    let data = [];
    console.log(this.$route.params.userId)
    axios.get("http://localhost:4000/api/dashboards")
    .then(res => {
      for(let i = 0; i < res.data.data.length; i++){
        data.push(res.data.data[i]);
      }
      data.forEach(element => {
        if(element.id === this.$route.params.userId){
          this.dashboardList.push(element);
        }
      });
    });
    
  }
}
</script>

<style scoped>
h1{
  background: grey;
  color: white;

}

.wrapper{
  display: grid;
  grid-template-columns:repeat(3,1fr);
}

.add{
  padding:20px;
  margin: 10px;
}
.link{
  color: red;
  text-decoration: none;
  text-transform: uppercase;
}

button{
  color: white;
  background: grey;
  margin: 5px;
  padding: 5px;
}
</style>
