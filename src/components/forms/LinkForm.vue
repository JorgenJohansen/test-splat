<template>
  <div id="app">
     <h3>Add a new link</h3>
     <form>
         <label>Title: </label>
         <input type="text" v-model="title" />
         <label>Link: </label>
         <input type="text" v-model="link" />
         <button>Create link</button>
         <button>Cancel</button>
         
     </form>
     
  </div>
</template>

<script>


export default {
  data(){
      return{
          title:"",
          link:"",
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
