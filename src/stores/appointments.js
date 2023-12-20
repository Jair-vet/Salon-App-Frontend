import { ref, computed, onMounted, inject, watch } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'


export const useAppointmentsStore = defineStore('appointments', () => {

    const services = ref([])

    function onServiceSelected(service) {
        if(services.value.some(selectedService => selectedService._id === service._id)) {
            services.value = services.value.filter( selectedService => selectedService._id !== service._id )
        } else {
            // ? Only if you want to limit how many services you can select
            // if(services.value.length === 2) {
            //     alert('Maximum 2 services per appointment')
            //     return
            // }
            services.value.push(service)
        }
    }

    const totalAmount = computed(() => {
        return services.value.reduce((total, service) => total + service.price, 0)
    })

    const isServiceSelected = computed(() => {
        return (id) =>  services.value.some( service => service._id === id )
    })

    const noServicesSelected = computed(() => services.value.length === 0) 


    return {
        services,
        onServiceSelected,
        totalAmount,
        isServiceSelected,
        noServicesSelected,
    }
})