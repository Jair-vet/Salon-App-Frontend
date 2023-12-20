<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import NewAppointmentLayoutVue from './views/appointments/NewAppointmentLayout.vue';
  import { useRoute } from 'vue-router'

  const route = useRoute()
  console.log(route.name);

</script>

<template>
  <div class="md:flex h-screen">
    <div class="h-64 md:h-auto bg-cover bg-center md:w-1/3 bg-app">
      <!-- Title -->
      <h1 class="text-3xl lg:text-5xl font-black text-white text-center ">App<span class="text-green-500">Salon</span></h1>
      <!-- Nav -->
      <nav class="my-5 flex flex-col px-10 gap-3 md:mt-24">
        <RouterLink
          :to="{name: 'new-appointment'}"
          class="flex-1 text-center md:p-3 p-2 uppercase font-extrabold duration-500 rounded-lg hover:bg-blue-700 hover:text-white "
          :class="route.name === 'new-appointment' ? 'bg-blue-700 text-white' : 'bg-white text-blue-500' "
        >
            Services
        </RouterLink>
        <RouterLink
          :to="{name: 'appointment-details'}"
          class="flex-1 text-center md:p-3 p-2 uppercase font-extrabold duration-500 rounded-lg hover:bg-blue-700 hover:text-white"
          :class="route.name === 'appointment-details' ? 'bg-blue-700 text-white' : 'bg-white text-blue-500' "
          
        >
            Date and Summary
        </RouterLink>
      </nav>
    </div>
    
    <div class="md:w-2/3 px-10 py-5 min-h-full overflow-y-scroll">
      <RouterView />
    </div>
  </div>
</template>


