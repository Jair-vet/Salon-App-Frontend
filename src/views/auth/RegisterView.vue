<script setup>
    import { inject } from 'vue'
    import { reset } from '@formkit/vue'
    import AuthAPI from '@/api/AuthAPI'

    const toast = inject('toast')

    const handleSubmit = async ({password_confirm, ...formData}) => {
        try {
            const { data } = await AuthAPI.register(formData)
            toast.open({
                message: data.msg,
                type: 'success'
            })
            reset('registerForm')
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
        <h1 class="text-6xl font-extrabold text-white text-center mt-10">Create an Account</h1>
        <p class="text-2xl text-white text-center my-5">Create an account at AppSalon</p>

        <FormKit
            id="registerForm"
            type="form"
            :actions="false"
            incomplete-message="Could not send, check notifications"
            @submit="handleSubmit"
        >
            <FormKit
                type="text"
                label="Nombre"
                name="name"
                placeholder="Your Name"
                validation="required|length:3"
                :validation-messages="{
                    required: 'Name is required',
                    length: 'Name is too short'
                }"
            />
    
            <FormKit
                type="email"
                label="Email"
                name="email"
                placeholder="Email"
                validation="required|email"
                :validation-messages="{
                    required: 'Email is required',
                    email: 'Invalid email'
                }"
            />
    
            <FormKit
                type="password"
                label="Password"
                name="password"
                placeholder="User Password - Min 6 Characters"
                validation="required|length:6"
                :validation-messages="{
                    required: 'Password is mandatory',
                    length: 'The password must contain at least 6 characters'
                }"
            />
    
            <FormKit
                type="password"
                label="Repeat Password"
                name="password_confirm"
                placeholder="Repeat the password"
                validation="required|confirm"
                :validation-messages="{
                    required: 'Repeat password is mandatory',
                    confirm: 'Passwords are not the same'
                }"
            />
    
    
            <FormKit type="submit">Create Account</FormKit>
        </FormKit>
    </div>
</template>
