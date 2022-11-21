<template>
  <v-container data-aos="fade-up" class="backgroud">
        <v-alert close-text="close Alert" color="green accent-4" dark dismissible
        v-if="this.$route.params.message">
        {{ this.$route.params.message }}
    </v-alert>
   <v-row no-gutters data-aos="fade-up">
      <v-col data-aos="fade-up" sm="3" class="pa-1" v-for="post in posts" :key="post._id">
        <v-card class="pa-1" :to="{ name: 'post', params: { id: post._id }}">
          <v-img height="250" :src="`/${post.image}`"></v-img>
          <div class="ml-1 mt-1" outlined>
            <b>{{ post.category }}</b>
          </div>
          <v-card-title class="py-0" >
            {{post.title}}
          </v-card-title>
          <v-card-text class="py-0">
            <p>{{post.content.substring(0,30)+"..."}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import AOS from './plugins/Link_AOS';
import AOS from './plugins/aos.vue';
  AOS.init();
</script>

<script>
  import API from "../apiView";
//   import axios from "axios";
// import { response } from "express";

  export default {
    name: 'Home',
    data(){
      return {
        posts: [],

        // user:null,
      };
    },
    async created(){
      this.posts = await API.getAllPost();

      // this.user = response.data;
    
    },
  };
</script>

<style>
  body{
    background-color: black;
  }
  .theme--light.v-application {
    background: #3f51b5;
    color: rgba(0, 0, 0, 0.87);
  }
  .backgroud{
    background-color: #b2bdfd;
  }
</style>


