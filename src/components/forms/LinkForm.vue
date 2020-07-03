<template>
  <div id="app">
     <h3>Add a new link</h3>
     <form>
         <label>Title: </label>
         <input type="text" v-model="title" />
         <label>Link: </label>
         <input type="text" v-model="link" />
         <button @click="goHome">Create link</button>
         <button @click="goHome">Cancel</button>
         
     </form>
     
  </div>
</template>

<script>


export default {
  data(){
      return{
          title:"",
          link:"",
          countryCodes:[],
      }
    },
  components: {
    
  },
  methods:{
      createLink(link){
          if(this.validateLink(link)){
              return{
                  title: this.title,
                  link:this.link,
              }
          }else{
              alert("Link is not valid!")
          }

      },
      validateLink(link){
          let linkList = link.split(".");
          if(linkList[0] !== "www"){
             this.countryCodes.forEach(element => {
              if(element === linkList[2]){
                  return true;
              }
            });
          }
          return false;
          
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
