
<template>
  <div class="md:w-2/3 mx-auto">
    <nav>
      <div class="lg:flex lg:justify-between lg:items-center mx-16 lg:mt-10 p-4 text-xl font-semibold">
        <img class="w-40 h-18" src="https://i.ibb.co/VjqG8Np/Logo.png" alt="" />
        <ul class="md:flex text-center gap-5 mt-5">
          <li>
            <router-link
              to="/"
              :class="$route.path === '/' ? 'text-red-500' : ''"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/donation"
              :class="$route.path === '/donation' ? 'text-red-500' : ''"
            >
              Donation
            </router-link>
          </li>
          <li>
            <router-link
              to="/statistics"
              :class="$route.path === '/statistics' ? 'text-red-500' : ''"
            >
              Statistics
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
