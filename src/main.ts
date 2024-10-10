import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { MotionPlugin as motion } from '@vueuse/motion'
import App from './App.vue'
import routes from '~pages'
import './styles/index.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .use(motion)
  .mount('#app')
