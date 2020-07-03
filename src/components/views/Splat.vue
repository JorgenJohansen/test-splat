<template>
  <div id="app">
   <h2>{{splat.title}}</h2>
   <router-link to="/dashboard/splat/note">Add a new Note</router-link><br>
   <router-link to="/dashboard/splat/link">Add a new Link</router-link>
   <h3>Notes: </h3>
   <ul class="wrapper">
       <li v-for="note in notes" :key="note.title">
           <app-notes v-bind:note="note"></app-notes>
       </li>
   </ul>

   <h3>Links: </h3>
   <ul class="wrapper">
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
  props:['splat'],
  data(){
      return{
          title: "My brilliant splat",
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
      renameSplat(title){
          this.title = title;
      }
  }
}
</script>

<style>
#app{
    text-align: center;
}
.wrapper{
    display: grid;
    grid-gap:1em;
    
}
</style>
