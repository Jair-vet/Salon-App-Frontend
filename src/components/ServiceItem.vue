<script setup>
    import { formatCurrency } from '../helpers'
    import { useAppointmentsStore } from '../stores/appointments'

    const appointments = useAppointmentsStore()

    defineProps({
        service: {
            type: Object
        }
    })
</script>


<template>
    <div
        class="p-5 space-y-5 rounded-lg cursor-pointer duration-500 md:h-32 hover:bg-gray-600 hover:text-white"
        :class="appointments.isServiceSelected(service._id) ? 'opacity-40 bg-gray-500 text-white' : 'bg-gray-200'"
        @click="appointments.onServiceSelected(service)"
    >
        <p class="text-xl font-light">{{ service.name }}</p>
        <p 
            class="text-2xl font-black"
            :class="appointments.isServiceSelected(service._id) ? 'text-white' : 'text-green-500'"
        >{{ formatCurrency(service.price)  }}</p>
    </div>
</template>