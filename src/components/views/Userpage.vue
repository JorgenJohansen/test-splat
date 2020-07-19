<template>
  <div id="app">
    <Header v-bind:status="[renderHome,renderDashboard,renderLogin,renderSignup,renderLogout,renderUser]"/>
     <h1>{{title}}</h1>

      <div class="add">
        <router-link :to="{name: 'CreateDashboard', params:{userpageTitle: title}}" 
        tag="button">Add a new Dashboard</router-link>
      </div>
     

     <div class="wrapper">
       <div class="link" v-for="splat in splats" :key="splat.title">
         <router-link :to="{
           name: 'Dashboard', params:{title: splat.title}}" tag="button">{{splat.title}}</router-link>
       </div>
     </div>

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
          title: "Jørgen's place",
          splats:[
              {
                  title:"Dashboard 1",
              },
              {
                  title:"Dashboard 2",
              },
              {
                  title:"Dashboard 3",
              },
              {
                  title:"Dashboard 4",
              },
              {
                  title:"Dashboard 5",
              },
              
          ]
      }
    },
  components: {
    Header,
  },
  methods:{
    
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
