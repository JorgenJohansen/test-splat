<template>
  <div id="app">
    <Header v-bind:status="[renderHome,renderDashboard,renderLogin,renderSignup,renderLogout,renderUser]"/>
    
   <h2>{{title}}</h2>
   <div class="add">
        <router-link :to="{name: 'Note', params:{dashboardTitle: title}}" 
        tag="button">Add a new Note</router-link>
        <router-link :to="{name: 'Link', params:{dashboardTitle: title}}"  
        tag="button">Add a new Link</router-link>
        <router-link :to="{name: 'EditDashboard', params:{dashboardTitle: title}}"  
        tag="button">Edit {{title}}</router-link>
   </div>
   
   <h2>Notes: </h2>
   <div class="wrapper-note">
       <p v-for="note in notes" :key="note.title">
           <Notes v-bind:note="note" />
       </p>
   </div>

   <h2>Links: </h2>
   <div class="wrapper-link">
       <p v-for="link in links" :key="link.title">
           <Links v-bind:link="link" />
       </p>
   </div>
  </div>
</template>

<script>
import Notes from '../Notes';
import Links from '../Links';
import Header from '../Header';

export default {
  props:{
    renderHome:{
      type:Boolean
    },
    renderDashboard:{
      type:Boolean
    },
    renderLogin:{
      type:Boolean
    },
    renderSignup:{
      type:Boolean
    },
    renderLogout:{
      type:Boolean
    },
    renderUser:{
      type:Boolean
    },
  },
  data(){
      return{
          title: this.$route.params.title,
          links:[
            {
                title: "YouTube",
                link: "https://www.youtube.com/",
            },
            {
                title: "Factsplat",
                link: "https://factsplat.com/",
            },
            {
                title: "Spotify",
                link: "https://open.spotify.com/",
            },
        ],

        notes:[
            {
                title:"My chores",
                content: "Take out the garbage, code some Vue and make a backend."
            },
            {
                title:"My favorite metallica songs",
                content: "Unforgiven, Master of puppets and Frantic."
            },
            {
                title:"Free time activities",
                content: "Gaming, exercise and reading."
            },
        ]
          
      }
    },
  components: {
    Links,
    Notes,
    Header,
  },
  methods:{
      renameSplat(title){
          this.title = title;
      }
  }
}
</script>

<style>

.wrapper-link{
    display: grid;
    grid-template-columns:repeat(6,1fr);
    grid-gap:1em;  
    justify-content: center;
}
.wrapper-link > p{
    background: lightgray;
    padding: 1em;
    border: 1px solid #333;
}
.wrapper-note{
    display: grid;
    grid-template-columns:repeat(6,1fr);
    grid-gap:1em; 
    margin: 10px; 
}

.wrapper-note > p{
    background: lightgray;
    padding: 1em;
    border: 1px solid #333;
}
.add{
    display: grid;
    grid-template-columns:repeat(6,1fr);
    grid-gap:1em;  
}

</style>
