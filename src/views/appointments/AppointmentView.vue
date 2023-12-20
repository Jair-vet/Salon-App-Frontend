<script setup>
    import SelectedService from '@/components/SelectedService.vue';
    import { useAppointmentsStore } from '../../stores/appointments';
    import { formatCurrency } from '../../helpers/index.js'

    const appointments = useAppointmentsStore()
</script>


<template>
    <div>
        <h2 class="text-4xl font-extrabold text-white">Detalles Cita y Resumen</h2>
        <p class="text-white text-lg mt-5">Confirm the Information and Confirm your Appointment</p>

        <h3 class="text-3xl font-extrabold text-white">Services</h3>

        <p 
            v-if="appointments.noServicesSelected"
            class="text-3xl text-yellow-600 font-black text-center uppercase mt-10" 
            >nothing is selected</p>
        <div
            v-else 
            class="grid gap-5 mt-5">
            <SelectedService 
                v-for="service in appointments.services"
                :key="service._id"
                :service="service"
            />

            <p class="md:text-right text-center mt-5 text-white text-2xl">Total to pay: <span class="text-green-600 font-black">{{ formatCurrency(appointments.totalAmount) }}</span></p>
        </div>

    </div>
</template>
