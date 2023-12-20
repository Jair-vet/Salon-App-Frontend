<script setup>
   import { useRoute } from 'vue-router'

   const route = useRoute()
</script>


<template>
   
    <div class="space-y-5">
        <RouterView />
    </div>
</template>

