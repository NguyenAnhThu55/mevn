<template>
    <v-container>
    
        <v-row no-gutters>
            <v-col class="mx-auto" sm="10">
                <v-card class="pa-5">
                    <v-card-title>Add New Post</v-card-title>
                    <v-divider></v-divider>
                    <v-form class="pa-5" ref="form" @submit.prevent="submitForm"  enctype="multipart/form-data">
                        <v-text-field label="Title" v-model="post.title" prepend-icon="mdi-note" :rules="rules" ></v-text-field>
                        <v-text-field label="Category" v-model="post.category" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>
                        <v-textarea label="Content" v-model="post.content" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>
                        <v-file-input @change="selectFile" show-size counter multiple label="select Image" :rules="rules"></v-file-input>
                        <v-btn class="mt-3" type="submit" color="primary">Add Post</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from "../apiView";
    export default {
        data(){
            return{
                rules: [(value)=>!!value || "This field is required"],
                post:{
                    title:"",
                    category:"",
                    content:"",
                    image:"",
                },
                image:"",
            };
        },
        methods:{
            selectFile(file){
                this.image = file[0];
            },
            async submitForm(){
                const formData = new FormData();
                formData.append("image",this.image);
                formData.append("title",this.post.title);
                formData.append("category",this.post.category);
                formData.append("content",this.post.content);
                if(this.$refs.form.validate()){
                    const response = await API.appPost(formData);
                    this.$router.push({ name: 'home', params: { message: response.mesage}});
                }
            }
        }
    }
</script>