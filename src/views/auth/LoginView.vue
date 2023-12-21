<script setup>
    import { inject } from 'vue'
    import { useRouter } from 'vue-router'
//     import AuthAPI from '../../api/AuthAPI';
// 
//     const toast = inject('toast')
//     const router = useRouter()
// 
//     const handleSubmit = async (formData) => {
//         try {
//             const { data: { token } } = await AuthAPI.login(formData)
//             localStorage.setItem('AUTH_TOKEN', token)
//             router.push({name: 'my-appointments'})
//         } catch (error) {
//             toast.open({
//                 message: error.response.data.msg,
//                 type: 'error'
//             })
//         }
//     }
</script>

<template>
    <div>

        <h1 class="text-6xl font-extrabold text-white text-center mt-10">Log in</h1>
        <p class="text-2xl text-white text-center my-5">If you have an account, log in</p>
    
        <FormKit
            id="loginForm"
            type="form"
            :actions="false"
            incomplete-message="Could not send, check notifications"
            @submit="handleSubmit"
        >
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
                placeholder="Password"
                validation="required"
                :validation-messages="{
                    required: 'Password is mandatory'
                }"
            />
    
            <FormKit type="submit">Log in</FormKit>
        </FormKit>
    </div>
</template>
