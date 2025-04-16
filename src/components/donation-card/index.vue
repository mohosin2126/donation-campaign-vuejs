<!-- DonationCard.vue -->
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  categories: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div v-for="category in categories" :key="category.id" >
    <router-link :to="{ name: 'donationDetails', params: { id: category.id } }" class="card card-compact gap-2">
      <div :style="{ backgroundColor: category.Card_bg }">
        <figure><img class="h-48" :src="category.Picture" alt="Shoes" /></figure>
        <div>
          <button
            :style="{ backgroundColor: category.Category_bg, color: category.Text_button_bg }"
            class="py-1 px-2 border-1 rounded text-lg ml-2"
          >
            {{ category.Category }}
          </button>
          <p :style="{ color: category.Text_button_bg }" class="ml-2 mt-1 text-base font-semibold">
            {{ category.Title }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>
