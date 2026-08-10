import { createRouter, createWebHistory } from 'vue-router'

// 1. Import your views
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

// 2. Define routes
const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
]

// 3. Create the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
