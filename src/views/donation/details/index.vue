<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import jsonData from '@/data/data.json'

const route = useRoute()
const id = route.params.id
const data = ref(jsonData)
const category = computed(() => data.value.find(item => item.id == id) || {})

const formatPrice = (price) => {
  if (!price) return ''
  const numericValue = price.replace(/[^\d.]/g, '')

  const currencySymbol = price.match(/[^\d.]/)[0] || '$'

  return `${currencySymbol}${parseFloat(numericValue).toFixed(2)}`
}
</script>

<template>
  <div class="flex justify-center my-10 px-4">
    <div class="w-full  rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div class="flex flex-col md:flex-row" :style="{ backgroundColor: category.Card_bg }">
        <!-- Image Section -->
        <div class="md:w-2/5 overflow-hidden">
          <img
            :src="category.Picture"
            class="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-105"
            :alt="category.Title"
          />
        </div>

        <!-- Content Section -->
        <div class="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span
                :style="{ backgroundColor: category.Category_bg, color: category.Text_button_bg }"
                class="py-1 px-3 rounded-full text-xs font-medium"
              >
                {{ category.Category }}
              </span>
              <span class="text-xl font-bold" :style="{ color: category.Text_button_bg }">
                {{ formatPrice(category.Price) }}
              </span>
            </div>

            <h2 class="text-2xl font-bold mb-4">{{ category.Title }}</h2>

            <p class="text-gray-600 mb-6" v-if="category.Description">
              {{ category.Description || 'No description available.' }}
            </p>
          </div>

          <div class="flex justify-between items-center">
            <button
              class="py-2 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-md flex items-center"
              :style="{
                backgroundColor: category.Text_button_bg,
                color: '#ffffff'
              }"
            >
              <span>View Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>

            <button class="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" :style="{ stroke: category.Text_button_bg }">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
