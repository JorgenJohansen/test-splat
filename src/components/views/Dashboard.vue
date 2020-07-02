<template>
  <div id="app">
    <app-header></app-header>
     <h1>Your Dashboard</h1>
     <ul>
       <li v-for="splat in splats" :key="splat.title">
         <router-link to="/dashboard/splat">{{splat.title}}</router-link>
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
                  notes: [],
                  links:[],

              },
              {
                  title:"Splat 2",
                  notes: [],
                  links:[],

              },
              {
                  title:"Splat 3",
                  notes: [],
                  links:[],

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

<style>
h1{
  background: blue;
  color: white;
}
</style>
