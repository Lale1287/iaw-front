<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LoginButton from "@/components/buttons/login-button.vue";
import LogoutButton from "@/components/buttons/logout-button.vue";
import SignUpButton from "@/components/buttons/signup-button.vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { userAuthStore } from '@/stores/userAuthStore';
import { onMounted } from 'vue';

const { isAuthenticated } = useAuth0();
const { user } = useAuth0();
const { getAccessTokenSilently } = useAuth0();
const authStore = userAuthStore()

async function setAuthStore(){
  if(isAuthenticated){
    const token = await getAccessTokenSilently();
    authStore.login(token, user.value)
  } else{
    authStore.logout()
  }
}

onMounted(() => setAuthStore())

</script>

<template> 
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Bienvenido Usuario</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-if="isAuthenticated">
        <v-btn icon>
          <RouterLink to="/sitios"><v-icon>mdi-home</v-icon></RouterLink>
        </v-btn>
        <v-btn icon>
          <RouterLink to="/profile"><v-icon>mdi-account</v-icon></RouterLink>
        </v-btn>
        <LogoutButton />
      </template>
      <template v-if="!isAuthenticated">
        <LoginButton />
        <SignUpButton />
      </template>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
    <v-footer>

    </v-footer>
  </v-app>
</template>

<style scoped>
.v-app-bar{
box-shadow: none!important;;
}
.v-app-bar-title{
	flex: 1 1 auto;
}
.v-btn{
	text-align: end;
	margin-inline-end: 16px;
  width: auto;
}
</style>
