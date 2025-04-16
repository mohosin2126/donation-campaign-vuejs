<template>
  <div class="md:w-2/3 mx-auto">
    <Navbar />
    <RouterView />
  </div>
</template>
<script setup>
import Navbar from '@/components/navbar/index.vue'
</script>
