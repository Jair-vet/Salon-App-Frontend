<script setup>
    import { inject } from 'vue'
    import { reset } from '@formkit/core'
    import AuthAPI from '../../api/AuthAPI'

    const toast = inject('toast')

    const handleSubmit = async ({email}) => {
        try {
            const { data } = await AuthAPI.forgotPassword({email})
            toast.open({
                message: data.msg,
                type: 'success'
           })
           reset('forgotPassword')
        } catch (error) {
           toast.open({
                message: error.response.data.msg,
                type: 'error'
           })
        }
    }
</script>

<template>
    <div>
        <h1 class="text-6xl font-extrabold text-white text-center mt-10">Forgot my password</h1>
        <p class="text-2xl text-white text-center my-5">Regain access to your account</p>
    
        <FormKit
            id="forgotPassword"
            type="form"
            :actions="false"
            incomplete-message="Could not send, check notifications"
            @submit="handleSubmit"
        >
            <FormKit
                type="email"
                label="Email"
                name="email"
                placeholder="User Email"
                validation="required|email"
                :validation-messages="{
                    required: 'El Nombre es obligatorio',
                    email: 'Invalid Email'
                }"
            />
    
            <FormKit type="submit">Send</FormKit>
    
        </FormKit>
    </div>
</template>

