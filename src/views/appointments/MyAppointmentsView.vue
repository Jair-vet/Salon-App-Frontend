<script setup>
    // import Appointment from '../../components/Appointment.vue'
    import { useUserStore } from '../../stores/user'
    const user = useUserStore()
</script>


<template>
    <div>
        <h2 class="text-4xl font-extrabold text-white mt-10">My appointments</h2>
    
        <p v-if="user.loading" class="text-white text-2xl text-center mt-5">Loading...</p>
    
        <div >
            <p v-if="user.noAppointments" class="text-yellow-600 uppercase font-bold text-2xl text-center mt-20">You have no upcoming appointments</p>
    
    
            <div v-else class="grid grid-cols-1 gap-5 mt-10">
                <Appointment
                    v-for="appointment in user.userAppointments"
                    :key="appointment._id"
                    :appointment="appointment"
                />
            </div>
        </div>

    </div>
</template>
