import { createRouter, createWebHistory } from 'vue-router'


import about from './views/about.vue'
import path from 'path'
import { defineAsyncComponent } from 'vue'
import DashBoard from './views/DashBoard.vue'
import LoadingScreen from './views/LoadingScreen.vue'
// const routes = [

//   { path: '/about', component: About },
// ]

const routes = [
    {
        path :'/Testimonials',
        // component:About
        component:()=>import('./views/Testimonials.vue')
    },
    {
        path:'/',
        component:DashBoard
    },
    {
        path:'/loading',
        component:LoadingScreen
    },
    {
        path:'/about',
        component:about
    }
   
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
