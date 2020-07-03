<template>
  <div id="app">
     <h3>Add a new note</h3>
     <form>
         <label>Title: </label>
         <input type="text" v-model="title" />
         <label>Link: </label>
         <textarea type="text" v-model="content" />
         <button @click="goHome">Create note</button>
         <button @click="goHome">Cancel</button>
         
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
      createNote() {
          return{
              title: this.title,
              content: this.content,
          }
      },
      goHome() {
          this.$router.push('/dashboard')
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
