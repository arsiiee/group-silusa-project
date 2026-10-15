<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
/* Kept inside Tailwind's `base` layer so the universal reset can never
   override Tailwind utility classes (see src/assets/main.css). */
@layer base {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #121112;
  }
}
</style>