<script setup>
   import { useRoute } from 'vue-router'

   const route = useRoute()
   console.log(route.name);
</script>


<template>
   
    <div class="space-y-5">
        <RouterView />
    </div>
</template>

