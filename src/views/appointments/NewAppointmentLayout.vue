<script setup>
    import { useAppointmentsStore } from '@/stores/appointments';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router'


    const route = useRoute()
    const appointments = useAppointmentsStore()

    onMounted(() => {
        appointments.clearAppointmentData()
    })
</script>


<template>
   
    <div class="space-y-5">
        <RouterView />
    </div>
</template>

