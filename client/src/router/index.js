import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AddPost from '../views/AddPost.vue';
import Post from '../views/Post.vue';
import EditPost from '../views/EditPost.vue';
import Contact from '../views/contact.vue';
import Login from '../views/login.vue';
import Register from '../views/register.vue';
import AddContact from '../views/AddContact.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/app-post',
    name: 'add-post',
    component: AddPost
  },

  {
    path: '/post/:id',
    name: 'post',
    component: Post
  },

  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPost
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },

  {
    path: '/app-contact',
    name: 'add-contact',
    component: AddContact
  },

    {
    path: '/',
    name: 'login',
    component: Login
  },

  {
    path: '/register',
    name: 'register',
    component:  Register
  },


  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
