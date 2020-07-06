<template>
  <div id="app">
    <Header v-bind:status="[renderHome,renderDashboard,renderLogin,renderSignup,renderLogout,renderUser]"/>
     <h1>Dashboard</h1>

     <div class="wrapper">
       <div class="link" v-for="splat in splats" :key="splat.title">
         <router-link :to="{
           name: 'Splat', params:{id: splat.title}}">{{splat.title}}</router-link>
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
          splats:[
              {
                  title:"Splat 1",
              },
              {
                  title:"Splat 2",
              },
              {
                  title:"Splat 3",
              },
              {
                  title:"Splat 4",
              },
              {
                  title:"Splat 5",
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
  grid-template-columns:repeat(6,1fr);
}
.link{
  color: red;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
