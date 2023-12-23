<script setup>
    import { useUserStore } from '@/stores/user';

    const user = useUserStore()
</script>


<template>  
    <div>
        <div class="flex justify-between items-center mb-10">
            <h1 class="text-3xl lg:text-6xl font-black text-white">App<span class="text-green-500">Salon</span></h1>
    
            <div class="flex flex-col space-y-5">
                <nav class="flex gap-2 items-center justify-end">
                    <RouterLink  
                        :to="{name: 'my-appointments'}"  
                        class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg"
                    >My dates</RouterLink>
    
                    <RouterLink
                        :to="{name: 'new-appointment'}"
                        class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg bg-blue-600 duration-300 hover:bg-blue-700"
                    >
                        New Date
                    </RouterLink>
                </nav>
            </div>
        </div>
    
        <main>
            <RouterView />
        </main>
    </div>
</template>

