import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/not_found.vue'
import AboutView from '../views/AboutView.vue'
import jobs from '../views/jobs/jobs.vue'
import jobDetails from '../views/jobs/jobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  
  {
    path: '/jobs',
    name: 'jobs',
    component: jobs
  },

  {
    path: '/job/:jobId',
    name: 'jobDetails',
    component: jobDetails,
    props: true
  },

  //catch 404 page
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
