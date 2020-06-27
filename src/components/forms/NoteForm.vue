<template>
  <div id="app">
     <h3>Add a new note</h3>
     <form>
         <label>Title: </label>
         <input type="text" v-model="title" />
         <label>Link: </label>
         <input type="text" v-model="content" />
         <button v-on:click="createNote">Create note</button>
         <button v-on:click="closeNote">Cancel</button>
         
     </form>
     
  </div>
</template>

<script>


export default {
  data(){
      return{
          title:"",
          content:"",
      }
    },
  components: {
    
  },
  methods:{
      createLink: function(){

      }
  }
}
</script>

<style>
form{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    
}
input{
    display:block;
    margin: auto;
    
    
}
label{
    margin: 5px;
}
</style>
