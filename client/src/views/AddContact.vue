<template>
    <v-container>
        <v-row no-gutters>
            <v-col class="mx-auto" sm="10">
                <v-card class="pa-5">
                    <v-card-title>Add New Contact</v-card-title>
                    <v-divider></v-divider>
                    <v-form class="pa-5" ref="form" @submit.prevent="subForm"  enctype="multipart/form-data">
                        <v-text-field label="name" v-model='contact.name'  dense color="blue"  prepend-icon="mdi-note" :rules="rules" ></v-text-field>
                        <v-text-field label="address" v-model='contact.address' dense color="blue" prepend-icon="mdi-note" :rules="rules" ></v-text-field>
                        <v-text-field label="phone" v-model='contact.phone'  dense color="blue" prepend-icon="mdi-note" :rules="rules" ></v-text-field>
                        <v-text-field label="email" v-model='contact.email'  dense color="blue" prepend-icon="mdi-note" :rules="rules" ></v-text-field>
                       
                        <v-btn class="mt-3" type="submit" color="primary">Add Contact</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import APC from "../contactView";
    export default {
        data(){
            return{
                rules: [(value)=>!!value || "This field is required"],
                contact:{
                    name:"",
                    address:"",
                    phone:"",
                    email:"",
                },  
            };
        },
        methods:{
            async subForm(){
                const dataFrom = new FormData();
             
                dataFrom.append("name",this.contact.name);
                dataFrom.append("address",this.contact.address);
                dataFrom.append("phone",this.contact.phone);
                dataFrom.append("email",this.contact.email);
                if(this.$refs.form.validate()){
                    const response = await APC.addContact(dataFrom);
                    this.$router.push({ name: 'contact', params: { message: response.mesage}});
                }
            }
        }
    }
</script>