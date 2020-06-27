<template>
  <div id="app">
     <h1>Your Dashboard</h1>
     <ul>
       <li v-for="splat in splats" :key="splat.title">
         <router-link to="/dashboard/splat">{{splat.title}}</router-link>
       </li>
     </ul>

  </div>
</template>

<script>


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
