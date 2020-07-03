<template>
  <div id="app">
    <app-header></app-header>
     <h1>Dashboard</h1>
     <ul class="wrapper">
       <li v-for="splat in splats" :key="splat.title">
         <router-link to="/dashboard/:splatId" tag="button">{{splat.title}}</router-link>
       </li>
     </ul>

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
  display:inline-block;
  display: grid;
  

}
</style>
