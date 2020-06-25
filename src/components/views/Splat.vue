<template>
  <div id="app">
   <h2>{{title}}</h2>
   <button v-on:click="openNotesForm">Add new notes</button>
   <button v-on:click="openLinksForm">Add new links</button>
   <h3>Notes: </h3>
   <ul>
       <li v-for="note in notes" :key="note.title">
           <app-notes v-bind:note="note"></app-notes>
       </li>
   </ul>

   <h3>Links: </h3>
   <ul>
       <li v-for="link in links" :key="link.title">
           <app-links v-bind:link="link"></app-links>
       </li>
   </ul>
  </div>
</template>

<script>
import Notes from '../Notes';
import Links from '../Links';

export default {
  data(){
      return{
          title: "My brilliant splat",
          links:[
              {
                title: "YouTube",
                link: "https://www.youtube.com/",
              },
              {
                title: "Facebook",
                link: "https://www.facebook.com/",
              },
              {
                title: "Spotify",
                link: "https://open.spotify.com/",
              },
          ],
          notes:[
              {
                  title:"My chores",
                  content: ["Take out the garbage","Code some Vue", "Make a backend"]
              },
              {
                  title:"My favorite metallica songs",
                  content: ["Unforgive", "Master of puppets", "Frantic"]
              },
              {
                  title:"Free time activities",
                  content: ["Gaming","Exercise","Reading"]
              },
          ]
      }
    },
  components: {
    "app-links": Links,
    "app-notes": Notes,
  },
  methods:{
      addLinks: function(){

      }, 
      addNotes: function(){

      }
  }
}
</script>

<style>
#app{
    text-align: center;
}
li{
    display: inline-block;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>
