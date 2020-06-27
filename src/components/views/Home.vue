<template>
  <div id="home">
    <h1>Hi and welcome to this test project</h1>
    <h3>Info</h3>
    <p>To use this application you can go to <router-link to="/dashboard/splat">this link</router-link> to view notes and links.</p>
    <p>If you want to create your own links/notes within your own dashboard, 
        you have to signup or login.</p>
    <router-view></router-view>
  </div>
</template>

<script>


export default {

  data(){
      return{
          
      }
    },
  components: {
    
  }
}
</script>

<style>
h1{
  background: blue;
  color: white;
}
</style>