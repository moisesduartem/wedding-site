import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SendMessage from '../views/SendMessage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/message/send',
    name: 'Envie-nos uma mensagem',
    component: SendMessage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
