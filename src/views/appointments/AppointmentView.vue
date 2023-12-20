<script setup>
    import SelectedService from '@/components/SelectedService.vue';
    import { useAppointmentsStore } from '../../stores/appointments';
    import { formatCurrency } from '../../helpers/index.js'
    import VueTailwindDatepicker from 'vue-tailwind-datepicker'
    import { ref } from 'vue';


    const appointments = useAppointmentsStore()

    const formatter = ref({
        date: 'DD/MM/YYYY',
        month: 'MMMM'
    })
</script>


<template>
    <div>
        <h2 class="text-4xl font-extrabold text-white">Detalles Cita y Resumen</h2>
        <p class="text-white text-lg mt-5">Confirm the Information and Confirm your Appointment</p>

        <h3 class="text-3xl font-extrabold text-white">Services</h3>

        <!-- Services -->
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

        <!-- Calendar -->
        <div class="space-y-8" v-if="!appointments.noServicesSelected">
            <h3 class="text-3xl text-center mt-4 font-extrabold text-white">Date and Hour</h3>
            <div class="lg:flex gap-5 items-start">
                <div class="w-full lg:w-96 flex justify-center rounded-lg">
                    <VueTailwindDatepicker 
                        as-single
                        no-input
                        :formatter="formatter"            
                        v-model="appointments.date"
                    />
                </div>
                <div class="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 lg:mt-0">
                    <button
                        v-for="hour in appointments.hours"
                        :key="hour.id"
                        class="block text-blue-500 rounded-lg text-xl font-black p-3 bg-white"
                    >
                        {{ hour }}
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>
