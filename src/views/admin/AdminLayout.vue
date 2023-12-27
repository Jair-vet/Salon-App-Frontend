<script setup>
    import { useUserStore } from '../../stores/user'
    const user = useUserStore()
</script>


<template>
    <div>
        <div class="flex justify-between">
            <div>
                <h2 class="text-xl lg:text-3xl font-black text-white">Administration Panel</h2>
            </div>
        </div>
        <main class="space-y-6">
           <RouterView />
        </main>
    </div>
</template>