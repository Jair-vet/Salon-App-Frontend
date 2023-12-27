<script setup>
    import { useRoute } from 'vue-router'
    const route = useRoute()

    const authRoutes = [
        { name: 'register', text: 'Create Account' },
        { name: 'login', text: 'Log In' },
        { name: 'forgot-password', text: 'Forgot Password' },
    ]
</script>

<template>
    <div class="mx-auto lg:w-3/5 mt-20">
        <RouterView />

        <nav class="mt-10 flex flex-col items-center space-y-5 lg:flex-row lg:justify-between lg:space-y-0">
            <RouterLink
                v-for="authRoute in authRoutes"
                :key="authRoute.id"
                class="uppercase font-bold w-full flex justify-center items-center mr-2 text-center text-white md:p-2 p-1 rounded-md border border-gray-800 duration-300 hover:text-blue-500 hover:border hover:border-blue-500"
                :to="{name: authRoute.name}"
                :class="{ 'hidden' : route.name === authRoute.name}"


            >   {{ authRoute.text }}
            </RouterLink>
        </nav>
    </div>
</template>
