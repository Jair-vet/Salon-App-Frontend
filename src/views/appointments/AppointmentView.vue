<script setup>
    import SelectedService from '@/components/SelectedService.vue';
    import { useAppointmentsStore } from '../../stores/appointments';

    const appointments = useAppointmentsStore()
</script>


<template>
    <div>
        <h2 class="text-4xl font-extrabold text-white">Detalles Cita y Resumen</h2>
        <p class="text-white text-lg mt-5">Confirm the Information and Confirm your Appointment</p>

        <h3 class="text-3xl font-extrabold text-white">Services</h3>

        <div class="grid gap-5 mt-5">
            <SelectedService 
                v-for="service in appointments.services"
                :key="service._id"
                :service="service"
            />
        </div>
    </div>
</template>
