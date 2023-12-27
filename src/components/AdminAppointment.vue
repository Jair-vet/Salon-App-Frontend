<script setup>
    import { displayDate } from '../helpers/date'
    import { formatCurrency } from '../helpers';

    defineProps({
        appointment: {
            type: Object
        }
    })

</script>

<template>
    <div>
        <div 
            class="bg-gray-200 p-5 space-y-3 rounded-lg"
        >
            <div class="text-gray-600 font-black">
                <p>Date: <span class="font-light"> {{ displayDate( appointment.date ) }} </span></p>
                <p>Hour: <span class="font-light"> {{ appointment.time }} Horas.</span></p>
            </div>

            <div class="text-gray-600 font-black">
                <p>Client Name: <span class="font-bold text-green-600"> {{ appointment.user.name }} </span></p>
                <p>Email: <span class="font-light"> {{ appointment.user.email }} </span></p>
            </div>

            <p class="text-lg font-black text-center">Services requested in the appointment</p>
            <div 
                v-for="service in appointment.services"
                :key="service.id"
                class="grid grid-cols-2"
            >
                <p class="text-xl font-light">{{ service.name }}</p>
                <p class="text-xl font-black text-blue-500">{{ formatCurrency( service.price ) }}</p>
            </div>

            <p class="text-2xl font-black text-center">
                Total a pagar: <span class="text-green-600"> {{ formatCurrency( appointment.totalAmount ) }} </span>
            </p>
        </div>
    </div>
</template>