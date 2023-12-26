<script setup>
    import { displayDate } from '../helpers/date'
    import { formatCurrency } from '../helpers';
    import { useAppointmentsStore } from '../stores/appointments'
    const appointments = useAppointmentsStore()

    defineProps({
        appointment: {
            type: Object
        }
    })
</script>


<template>
    <div class="bg-white p-5 space-y-3 rounded-lg">
        <div class="text-gray-500 font-black flex flex-col">
            <p>Time: <span class="font-light"> {{ displayDate( appointment.date ) }} </span></p>
            <p>Date: <span class="font-light"> {{ appointment.time }} Hrs</span></p>
        </div>

        <p class="text-lg font-black text-center">Services requested</p>
        <div 
            v-for="service in appointment.services"
            :key="service.id"
        >   

            <p class="text-gray-500 font-bold">{{ service.name }}</p>
            <p class="text-2xl font-black text-green-700">{{ formatCurrency( service.price ) }}</p>
        </div>

        <p class="text-2xl font-black text-right">
            Total to pay: <span class="text-green-600"> {{ formatCurrency( appointment.totalAmount ) }} </span>
        </p>

        <!-- Buttons -->
        <div class="flex gap-2 md:justify-end md:items-center md:flex-row flex-col">
            <RouterLink
                :to="{name: 'edit-appointment', params: { id : appointment._id} }" 
                class="bg-slate-600 duration-300 hover:bg-slate-800 rounded-lg p-3 text-center text-white text-sm uppercase font-black flex-1 md:flex-none"
            >
                Edit Date
            </RouterLink>

            <button
                class="bg-red-600 duration-300 hover:bg-red-800 rounded-lg p-3 text-white text-sm uppercase font-black flex-1 md:flex-none"
            >
                Cancel Date
            </button>
        </div>
    </div>
</template>

