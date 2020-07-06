<template>
  <div id="app">
    <app-header></app-header>
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
    'app-header': Header,
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
