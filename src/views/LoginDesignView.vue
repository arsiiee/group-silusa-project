<script setup>
/**
 * Pixel preview of the "Desktop - 6" frame (Figma node 51:2999).
 * Seeds the form with the exact values shown in the design and logs the
 * submit payload so the card can be reviewed at localhost:5173/design/login.
 */
import { ref } from 'vue'

import LoginCard from '@/components/LoginCard.vue'

const email = ref('you@liceo.edu.ph')
const password = ref('licE0_cr3At1vEs#2026')
const keepSignedIn = ref(true)

function handleSubmit(payload) {
  console.log('login submit', payload)
}
</script>

<template>
  <LoginCard
    v-model:email="email"
    v-model:password="password"
    v-model:keep-signed-in="keepSignedIn"
    @submit="handleSubmit"
  />
</template>
