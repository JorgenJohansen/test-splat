<template>
  <div id="app">
    <a v-bind:href="link.link">{{link.title}}</a>
  </div>
</template>

<script>


export default {
    props: ['link'],
  data(){
      return{
          
      }
    },
  components: {
    
  }
}
</script>

<style scoped>

button{
  background: blue;
  color: white;
}

a{
  text-decoration: none;
}

</style>
