<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card class="elevation-6 mt-10">
                    <v-row no-gutters>
                        <v-col cols="12" md="6" class="blue rounded-br-xl">
                            <div style="  text-align: center; padding: 180px 0;">
                                <v-card-text class="white--text">
                                    <h3 class="text-center ">Bạn đã đăng ký?</h3>
                                    <h6 class="text-center">Vui lòng đăng nhập vào tài khoảng của bạn ở đây<br>
                                    </h6>
                                </v-card-text>
                                <div class="text-center">
                                    <router-link to="/login"><v-btn tile outlined dark >Đăng nhập</v-btn></router-link>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-card-text class="mt-12">
                                <h4 class="text-center">Đăng ký tài khoảng</h4>
                                <h6 class="text-center  grey--text ">Vui lòng điền thông tin để đăng ký tài khoảng của bạn
                                   <br>
                                </h6>
                                <v-row align="center" justify="center">
                                    <v-col cols="12" sm="8">
                                        <v-form class="pa-5" ref="form" @submit.prevent="register">
                                            <v-text-field :rules="rules" label="Full Name" v-model="user.username" outlined dense color="blue" autocomplete="false" class="mt-4" />
                                            <v-text-field :rules="rules" label="Email" v-model="user.email" outlined dense color="blue" autocomplete="false" />
                                            <v-text-field :rules="rules" label="Password" v-model="user.password" outlined dense color="blue" autocomplete="false" type="password" />
                                            <v-row>
                                                <v-col cols="12" sm="7">
                                                    <v-checkbox label="Nhớ mật khẩu" class="mt-n1" color="blue">
                                                    </v-checkbox>
                                                </v-col>
                                                <v-col cols="12" sm="5">
                                                    <span class="caption blue--text ml-n4">CT449 & B1910584</span>
                                                </v-col>
                                            </v-row>
                                            <v-btn type="submit" color="blue" dark block tile>Đăng ký</v-btn>
                                        
                                            <h5 class="text-center  grey--text mt-4 mb-3">Đăng nhập nếu bạn đã có tài khảng</h5>
                                        </v-form>
                                       
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import auth from "../components/auth_service";
export default {
    name: 'Register',
    data(){
            return{
                rules: [(value)=>!!value || "This field is required"],
                user:{
                    username: "",
                    email: "",
                    password: "",
                }

            }

        },
        methods: {
            async register(){
                try{
                    await auth.register(this.user);
                    this.$router.push('/login');
                }catch(error){
                    console.log('error');
                }
                // const formData = new FormData();
                // formData.append("username",this.user.username);
                // formData.append("email",this.user.email);
                // formData.append("password",this.user.password);
                // if(this.$refs.form.validate()){
                //     const response = await API.register(formData);
                //     this.$router.push({ name: 'login', params: { message: response.mesage}});
                // }
            }
        },
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