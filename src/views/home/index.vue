<script setup>
import { ref } from 'vue'
import jsonData from '@/data/data.json'
import DonationCard from '@/components/donation-card/index.vue'

const data = ref(jsonData)
</script>

<template>
  <div>
    <div
      class="hero h-96 mt-5"
      :style="{ backgroundImage: 'url(https://i.ibb.co/PzC8fLR/Rectangle-4281.png)' }"
    >
      <div class="hero-overlay bg-opacity-80 bg-white"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-2xl font-black text-center text-black">
            I Grow By Helping People In Need
          </h1>
          <div class="flex">
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered input-accent w-full max-w-xs"
            />
            <button class="btn btn-neutral bg-red-500">Search</button>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <DonationCard :categories=data />
    </div>
  </div>
</template>
