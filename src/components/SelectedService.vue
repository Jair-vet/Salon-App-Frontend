<script setup>
    import { useAppointmentsStore } from '../stores/appointments';
    import { formatCurrency } from '../helpers';

    const appointments = useAppointmentsStore()
    defineProps({
        service: {
            type: Object
        }
    })
</script>


<template>
    <div class="border-2 border-gray-700 shadow-xl rounded-lg p-5 flex justify-between items-center">
        <div>
            <p class="text-2xl font-extrabold text-white">{{ service.name }}</p>
            <p class="text-3xl font-black text-blue-500">{{ formatCurrency( service.price ) }}</p>
        </div>
        
        <button
            type="button"
            class="inline-flex items-center rounded-md bg-red-600 duration-300 text-white text-sm px-3 py-2 shadow-sm uppercase font-bold hover:bg-red-700"
            @click="appointments.onServiceSelected(service)"
        >
            Delete
        </button>
    </div>
</template>

