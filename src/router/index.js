import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Buckit from '../views/Buckit.vue'
import Login from '../views/Login.vue'
import Category from '../views/Category.vue'
import Item from '../views/Item.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/buckit',
    name: 'Buckit',
    component: Buckit
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category
  },
  {
    path: '/item',
    name: 'Item',
    component: Item
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
