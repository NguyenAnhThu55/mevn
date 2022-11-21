<template>
  <div id="app">
    <v-app id="inspire">
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-title><b>VIETNAM VIEW</b></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down" data-aos="fade-up">
          <v-btn v-for="item in items" :key="item.icon" :to="item.link" flat>{{
            item.title
          }}</v-btn>
        </v-toolbar-items>
        <v-menu class="hidden-md-and-up" data-aos="zoom-in">
          <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
          <v-list>
            
            <v-list-tile v-for="item in items" :key="item.icon">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            
          </v-list>
        </v-menu>
      </v-toolbar>
      <v-divider>Phần gạch dưới </v-divider>
       <!-- Phần MAIN  -->
      <router-view>
        
      </router-view>
      <!-- Phần MAIN  -->
      <v-divider>Phần gạch dưới </v-divider>
      <v-footer height="auto" color="indigo" dark>
        <v-layout justify-center row wrap>
          <v-flex color="indigo" dark py-3 text-xs-center white--text xs12>
            &copy;2022_B1910584 — <strong>Nguyen Anh Thu</strong>
          </v-flex>
        </v-layout>
        <v-btn class="dropdown-item" v-on:click="logout">Logout</v-btn>
      </v-footer>
    </v-app>
  </div>
</template>
<script>
import AOS from './plugins/Link_AOS';
import AOS from './plugins/aos.vue';
  AOS.init();
</script>
<script>
import auth from './components/auth_service'
export default {
  data() {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home', link: '/home' },
        { title: 'Add Post', icon: 'mdi-note-plus', link: '/app-post' },
        {title: 'Contact', icon: 'mdi-email', link: '/contact' },
        // {title: 'Add Contact', icon: 'mdi-email-plus', link: '/app-contact' },
       
        { title: 'About', icon: 'mdi-help-box', link: '/about' },
      
      ],
    };
  },

  methods: {
    async logout(){
        auth.logout();
        this.$router.push('/');
      }
  }
};
</script>


<style>
  i.v-icon.notranslate.mdi.mdi-home.theme--light {
      color: orange;
    }
    i.v-icon.notranslate.mdi.mdi-note-plus.theme--light {
      color: #1976d2;
  }
  i.v-icon.notranslate.mdi.mdi-note.theme--light {
      color: yellowgreen;
  }
  i.v-icon.notranslate.mdi.mdi-view-list.theme--light {
      color: sienna;
  }
  i.v-icon.notranslate.mdi.mdi-email.theme--light {
      color: seagreen;
  }
  i.v-icon.notranslate.mdi.mdi-email-plus.theme--light {
      color: unset;
  }
  i.v-icon.notranslate.mdi.mdi-logout.theme--light {
      color: red;
  }


</style>