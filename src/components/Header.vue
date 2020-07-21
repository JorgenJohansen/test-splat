<template>
  <div>
    <div id="header">
      <h1>Test Splat</h1>
      <div class="right">
        <router-link v-if="status[0]" to="/" tag="button">Home</router-link> 
        <!--<router-link v-if="status[2]" to="/login" tag="button">Login</router-link> 
        <router-link v-if="status[3]" to="/signup" tag="button" >Sign Up</router-link>
        <router-link v-if="status[4]" to="/" tag="button">Logout</router-link>-->
        <h3 class="icon" v-if="status[5]">{{makeNameIcon(name)}}</h3>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  props:{
    status: Array,
  },

  data(){
      return{
         name: "Name Nameson"
      }
    },
  components: {
    
  },
  methods:{
    makeNameIcon(name){
      let namelist = name.split(" ");
      
      let firstLetter = namelist[0].charAt(0).toUpperCase();
      //If there is only 1 name, we return it.
      if(namelist.length == 1){
        return firstLetter;
      }
      let secondLetter = namelist.pop().charAt(0).toUpperCase();
      return firstLetter + secondLetter;
    }
  },
}
</script>

<style>
h1{
  color: white;
  margin: 5px;
}

#header{
  display:flex;
  flex-direction: row;
  background: #DC143C;
}

.icon{
  border-radius: 30px;
}

.right{
  display: flex; 
  justify-content: flex-end;
}

</style>