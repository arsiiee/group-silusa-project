<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getCurrentUser, logout } from '../services/auth'

const router = useRouter()
const user = ref(null)
const errorMessage = ref('')

onMounted(async () => {
  try {
    user.value = (await getCurrentUser()).user
  } catch {
    await router.replace('/login')
  }
})

const handleLogout = async () => {
  try {
    await logout()
    await router.replace('/login')
  } catch (error) {
    errorMessage.value = error.message
  }
}
</script>

<template>
  <main class="dashboard">
    <div v-if="user">
      <p>Welcome back</p>
      <h1>{{ user.name }}</h1>
      <p>{{ user.email }}</p>
      <p v-if="errorMessage" role="alert">{{ errorMessage }}</p>
      <button type="button" @click="handleLogout">Log out</button>
    </div>
  </main>
</template>
