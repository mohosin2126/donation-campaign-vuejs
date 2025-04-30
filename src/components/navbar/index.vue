<script setup >
import logo from "@/assets/Logo.png"
</script>

<template>
  <div >
    <nav>
      <div
        class="lg:flex lg:justify-between lg:items-center mx-16 lg:mt-10 p-4 text-xl font-semibold"
      >
        <img class="w-40 h-18" :src="logo" alt="" />
        <ul class="md:flex text-center gap-5 mt-5">
          <li>
            <router-link :to="{name:'home'}"> Home </router-link>
          </li>
          <li>
            <router-link :to="{name:'donation'}"> Donation </router-link>
          </li>
          <li>
            <router-link :to="{name:'statistics'}"> Statistics </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
