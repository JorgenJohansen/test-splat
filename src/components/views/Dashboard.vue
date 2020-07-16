<template>
  <div id="app">
    <Header v-bind:status="[renderHome,renderDashboard,renderLogin,renderSignup,renderLogout,renderUser]"/>
     <h1>Jørgen sitt place</h1>

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
  grid-template-columns:repeat(6,1fr);
}
.link{
  color: red;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
