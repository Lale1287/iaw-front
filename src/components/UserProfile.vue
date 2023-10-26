<template>
    <div>
        <h1>Profile Page</h1>
        <div>
            <div>
                <div>
                    <img :src="user.picture"/>
                    <div>
                        <h2>{{ user.name }}</h2>
                        <span>{{ user.email }}</span>
                    </div>
                </div>
                <div>
                    <span title="User Token">{{ accessToken }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { userAuthStore } from '@/stores/userAuthStore.js'
    const authStore = userAuthStore()
    const user = authStore.getUserData
    const accessToken = authStore.getToken
</script>