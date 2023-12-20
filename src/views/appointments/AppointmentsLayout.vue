<script setup>

</script>


<template>  
    <div class="flex justify-between">
        <h1 class="text-3xl lg:text-6xl font-black text-white">App<span class="text-green-500">Salon</span></h1>

        <div class="flex flex-col space-y-5">
            <div class="flex gap-2 items-center">
                <!-- User Name -->
                <p class="text-white text-right">Hola: Usuario</p>
                <!-- Log out button -->
                <button
                    type="button"
                    class="bg-red-600 hover:bg-red-700 duration-300 p-2 uppercase text-white font-bold rounded-lg text-xs"
                >   Log Out
                </button>
            </div>

            <nav class="flex gap-2 items-center justify-end">
                <button    
                    class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg"
                >My dates</button>

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
</template>

