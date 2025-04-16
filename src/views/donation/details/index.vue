<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import jsonData from '@/data/data.json'

const route = useRoute()
const id = route.params.id
const data = ref(jsonData)
const category = computed(() => data.value.find(item => item.id == id) || {})
</script>

<template>
  <div>
    <div class="mt-10 w-90 lg:w-full gap-5">
      <div class="flex items-center gap-5" :style="{ backgroundColor: category.Card_bg }">
        <div>
          <img :src="category.Picture" class="rounded-lg shadow-2xl w-56 h-52" :alt="category.Title" />
        </div>
        <div>
          <button
            :style="{ backgroundColor: category.Category_bg, color: category.Text_button_bg }"
            class="py-1 px-2 border-1 rounded"
          >
            {{ category.Category }}
          </button>
          <p class="ml-2 mt-1 text-xl font-semibold">
            {{ category.Title }}
          </p>
          <p :style="{ color: category.Text_button_bg }">{{ category.Price }}</p>
          <button
            class="btn-sm mt-4 text-white"
            :style="{ backgroundColor: category.Text_button_bg }"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
