<template>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
          <v-card class="elevation-6 mt-10">
            <v-row>
              <v-col cols="12" md="6">
                <v-card-text class="mt-12">
                  <h4 class="text-center">Đăng nhập</h4>
                  <h6 class="text-center  grey--text ">Vui lòng đăng nhập vào tài khoảng của bạn</h6>
                  <v-row align="center" justify="center">
                    <v-col cols="12" sm="8">
  
                    <v-form ref="form" @submit.prevent="login">
                      <v-text-field label="UserName"  v-model="user.username" outlined dense color="blue" autocomplete="false" class="mt-16" />
                      <v-text-field label="Password" v-model="user.password" outlined dense color="blue" autocomplete="false" type="password" />
                      <v-row>
                        <v-col cols="12" sm="5">
                          <span class="caption blue--text">Quên mật khẩu</span>
                        </v-col>
                      </v-row>
                      <v-btn color="blue" type="submit" dark block tile>Đăng nhập</v-btn>
  
                      <h5 class="text-center  grey--text mt-4 mb-3">Hoặc đăng ký tài khoảng</h5>
                    </v-form>
                      
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
              <v-col cols="12" md="6" class="blue rounded-bl-xl">
                <div style="  text-align: center; padding: 180px 0;">
                  <v-card-text class="white--text">
                    <h3 class="text-center ">Bạn  vẫn chưa có tài khoảng?</h3>
                    <h6 class="text-center">Vui lòng đăng ký tài khoảng để chảy nghiệm được tốt hơn<br>
                     </h6>
                  </v-card-text>
                  <div class="text-center">
                   <router-link to="/register"> <v-btn tile outlined dark>Đăng Ký</v-btn></router-link>
                  </div>
                </div>
              </v-col>
            </v-row>
  
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import auth from "../components/auth_service"
  export default {
    data(){
      
      return {
        user:{
          username: "",
          password: "",
        },
      };
    },
    // async created() {
    //   const response = await API.login(Credentials);
    //   this.login = response;
    // },
  
    methods:{
      async login(){
        
        try{
          const response = await auth.login(this.user);
          this.$router.push('/home');
          // console.log(response);
        }catch(error){
          alert("error");
        }
        
      }
    }
  
  }
  </script>
  <style scoped>
  .v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
  }
  
  .v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
  }
  </style>