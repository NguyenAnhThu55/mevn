<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <v-img :src="`/${post.image}`"></v-img>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col class="sm-2">
                                <v-btn small>{{ post.category }}</v-btn>
                            </v-col>

                            <v-col sm-10 class="d-flex jutify-end">
                                <v-btn color="success" class="mr-2" :to="{ name: 'edit-post', params: { id:post._id } }">Edit</v-btn>
                                <v-btn color="red"  @click="removePost(post._id)">Delete</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>

                    <v-card-subtitle class="headline">
                        <h3>{{ post.title }}</h3>
                    </v-card-subtitle>

                    <v-card-text class="grey--text">
                        <p>{{ post.content }}</p>
                        <p><b>{{ post.created }}</b></p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
        
<script>
import API from "../apiView"
    export default {
        data(){
            return {
                post: {},
            };
        },
        async created() {
            const response = await API.getPostByID(this.$route.params.id);
            this.post = response;
        },

        methods:{
            async removePost(id){
                const response = await API.deletePosts(id);
                this.$router.push({ name: 'home', params: {message: response.message}});
            }
        }
    }
</script>