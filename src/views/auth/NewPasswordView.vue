<script setup>
    import { onMounted, inject, ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import AuthAPI from '../../api/AuthAPI';
    
    const toast = inject('toast')
    const router = useRouter()
    const route = useRoute()
    const { token } = route.params

    const validToken = ref(false)
    
    onMounted(async () => {
        try {
            const {data} = await AuthAPI.verifyPasswordResetToken(token)
            validToken.value = true
        } catch (error) {
            toast.open({
                message: error.response.data.msg,
                type: 'error'
            })
        }
    })

    const handleSubmit = async ({password}) => {
        try {
            const { data } = await AuthAPI.updatePassword(token, {password})
            toast.open({
                message: data.msg,
                type: 'success'
            })
            setTimeout(() => {
                router.push({name: 'login'})
            }, 3000);
        } catch (error) {
            toast.open({
                message: error.response.data.msg,
                type: 'error'
            })
        }
    } 
</script>


<template>
    <div v-if="validToken">
        <h1 class="text-6xl font-extrabold text-white text-center mt-10">New Password</h1>
        <p class="text-2xl text-white text-center my-5">Type your new password</p>

        <FormKit
            id="newPasswordForm"
            type="form"
            :actions="false"
            incomplete-message="Could not send, check notifications"
            @submit="handleSubmit"
        >

            <FormKit
                type="password"
                label="Password"
                name="password"
                placeholder="User Password - Min 6 Characters"
                validation="required|length:6"
                :validation-messages="{
                    required: 'Password is Mandatory',
                    length: 'The password must contain at least 6 characters'
                }"
            />

            <FormKit type="submit">Save Password</FormKit>

        </FormKit>
    </div>

    <p v-else class="text-center text-2xl font-black text-white">Invalid Token</p>
</template>


