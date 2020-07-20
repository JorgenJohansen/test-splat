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
   <div v-if="notes.length === 0" class="wrapper-note">
       <p v-for="note in dummyNotes" :key="note.title">
           <Notes v-bind:note="note" />
       </p>
   </div>
   <div v-else class="wrapper-note">
       <p v-for="note in dummyNotes" :key="note.title">
           <Notes v-bind:note="note" />
       </p>
   </div>

   <h2>Links: </h2>
   <div v-if="links.length === 0" class="wrapper-link">
       <p v-for="link in dummyLinks" :key="link.title">
           <Links v-bind:link="link" />
       </p>
   </div>
   <div v-else class="wrapper-link">
       <p v-for="link in dummyLinks" :key="link.title">
           <Links v-bind:link="link" />
       </p>
   </div>
  </div>
</template>

<script>
import axios from 'axios';

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
          links: [],
          dummyLinks:[
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
        notes: [],
        dummyNotes:[
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
  },
  created: function(){
    let data = [];
    //console.log(this.$route.params.userId)
    //console.log(this.$route.params.dashboardId)
    axios.get("http://localhost:4000/api/notes")
      .then(res => {
        for(let i = 0; i < res.data.data.length; i++){
          data.push(res.data.data[i]);
          //console.log(res.data.data[i].id)
        }
        
        data.forEach(note => {
          //console.log("note.id: " + note.id);
          //console.log("note.user_id: " + note.user_id);
          //console.log("this.$route.params.userId: " + this.$route.params.userId);
          //console.log("this.$route.params.dashboardId: " + this.$route.params.dashboardId);
          //console.log(note.dashboard_id === this.$route.params.dashboardId);
          if(note.id === this.$route.params.userId && note.id === this.$route.params.dashboardId){
            this.notes.push(note);
          }
        });
      });
    console.log(this.notes.length);

    /*
    axios.get("http://localhost:4000/api/links")
      .then(res => {
        for(let i = 0; i < res.data.data.length; i++){
          data.push(res.data.data[i]);
        }
        data.forEach(link => {
          if(link.id === this.$route.params.userId && link.id === this.$route.params.dashboardId){
            console.log("Link: " + link);
          }
        });
      });
      */
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
