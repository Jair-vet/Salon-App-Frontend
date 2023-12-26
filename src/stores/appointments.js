import { ref, computed, onMounted, inject, watch } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import AppointmentAPI from '@/api/AppointmentAPI'
import { convertToISO } from '@/helpers/date'


export const useAppointmentsStore = defineStore('appointments', () => {

    const services = ref([])
    const date = ref('')
    const hours = ref([])
    const time = ref('')

    const toast = inject('toast')
    const router = useRouter()

    onMounted(() => {
        const startHour = 10
        const endHour = 19
        for(let hour = startHour; hour <= endHour; hour++){
            hours.value.push( hour + ':00' )
        }
    })

    function onServiceSelected(service) {
        if(services.value.some(selectedService => selectedService._id === service._id)) {
            services.value = services.value.filter( selectedService => selectedService._id !== service._id )
        } else {
            // ? Only if you want to limit how many services you can select
            if(services.value.length === 3) {
                alert('Maximum 3 services per appointment')
                return
            }
            services.value.push(service)
        }
    }

    async function createAppointment() {
        const appointment = {
            services: services.value.map( service => service._id),
            date: convertToISO( date.value ),
            tiem: time.value,
            totalAmount: totalAmount.value
        }

       try {
        const { data } = await AppointmentAPI.create(appointment)
        toast.open({
            message: data.msg,
            type: 'success'
        })
        clearAppointmentData()
        router.push({name: 'my-appointments'})
       } catch (error) {
        console.log(error);
       }
    }

    function clearAppointmentData() {
        // appointmentId.value = ''
        services.value = []
        date.value = ''
        time.value = ''
    }

    
    const isServiceSelected = computed(() => {
        return (id) =>  services.value.some( service => service._id === id )
    })
    
    const totalAmount = computed(() => {
        return services.value.reduce((total, service) => total + service.price, 0)
    })

    const noServicesSelected = computed(() => services.value.length === 0) 

    const isValidReservation = computed(() => {
        return services.value.length && date.value.length && time.value.length
    })

    return {
        services,
        date,
        hours,
        time,
        onServiceSelected,
        createAppointment,
        clearAppointmentData,
        isServiceSelected,
        totalAmount,
        noServicesSelected,
        isValidReservation
    }
})