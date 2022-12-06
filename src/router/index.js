import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/infoStarShip',
    name: 'infoStarShip',
    component: () => import('../views/InfoStarShip.vue')
  },
  {
    path: '/ShowFilms',
    name: 'ShowFilms',
    component: () => import('../views/ShowFilms.vue')
  },
  {
    path: '/ShowPeople',
    name: 'ShowPeople',
    component: () => import('../views/ShowPeople.vue')
  },
  {
    path: '/ShowPlanets',
    name: 'ShowPlanets',
    component: () => import('../views/ShowPlanets.vue')
  }

]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
