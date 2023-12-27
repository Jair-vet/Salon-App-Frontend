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

    const disableDate = (date) => {
        const today = new Date()
        return date < today || date.getMonth() > today.getMonth() + 1 || [0,7].includes( date.getDay() )
    }
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
                <div class="md:w-1/2 w-full flex justify-center rounded-lg">
                    <VueTailwindDatepicker 
                        :disable-date="disableDate"
                        as-single
                        no-input
                        :formatter="formatter"            
                        v-model="appointments.date"
                    />
                </div>
                <div class="md:w-1/2 w-full">
                    <div v-if="appointments.isDateSelected" class="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 lg:mt-0">
                        <button
                            v-for="hour in appointments.hours"
                            :key="hour.id"
                            class="block text-blue-500 rounded-lg text-xl font-black p-2 duration-300 hover:bg-gray-400 disabled:opacity-15 disabled:cursor-not-allowed"
                            :class="appointments.time === hour ?  'bg-blue-500 text-white hover:bg-blue-500' :  'bg-white'"
                            @click="appointments.time = hour"
                            :disabled="appointments.disableTime(hour) ? true : false"
                        >
                            {{ hour }}
                        </button>
                    </div>
                    <div v-if="appointments.isValidReservation" class="mt-4 flex justify-center">
                        <button
                            class="w-full md:w-auto duration-300 hover:bg-blue-700 bg-blue-500 p-3 rounded-lg uppercase font-black text-white"
                            @click="appointments.saveAppointment"
                        >confirm reservation</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
