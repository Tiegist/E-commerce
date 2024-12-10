import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ECommerce from '../views/ECommerce.vue'
import TimeCounter from '../views/TimeCounter.vue'
import ClothDetail from '../views/ClothDetail.vue'
import ShoeDtail from '../views/ShoeDtail.vue'
import AccessoriesDetail from '../views/AccessoriesDetail.vue'
import ElectronicsDetail from '../views/ElectronicsDetail.vue'
import BooksDetail from '../views/BooksDetail.vue'
import BagsDetail from '../views/BagsDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ECommerce',
    name: 'ECommerce',
    component:ECommerce
  },  
  {
    path: '/TimeCounter',
    name: 'TimeCounter',
    component: TimeCounter
  },  
  {
    path: '/ClothDetail',
    name: 'ClothDetail',
    component: ClothDetail
  }, 
  {
    path: '/ShoeDtail',
    name: 'ShoeDtail',
    component: ShoeDtail
  },  
  {
    path: '/AccessoriesDetail',
    name: 'AccessoriesDetail',
    component: AccessoriesDetail
  },  
  {
    path: '/ElectronicsDetail',
    name: 'ElectronicsDetail',
    component: ElectronicsDetail
  },  
  {
    path: '/BooksDetail',
    name: 'BooksDetail',
    component: BooksDetail
  }, 
  {
    path: '/BagsDetail',
    name: 'BagsDetail',
    component: BagsDetail
  }, 
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
