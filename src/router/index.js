import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import MyRequestsView from '../views/MyRequestsView.vue'
import RequestServiceView from '../views/RequestServiceView.vue'
import SettingsView from '../views/SettingsView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswordView
    },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/my-requests',
    name: 'my-requests',
    component: MyRequestsView
  },
  {
    path: '/request-service',
    name: 'request-service',
    component: RequestServiceView
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
