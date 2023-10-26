<template>
	<v-app-bar>
      <v-app-bar-title>Bienvenido Usuario</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn>Cerrar sesión</v-btn>
    </v-app-bar>
</template>

<script>
import LoginButton from "@/components/buttons/login-button.vue";
import LogoutButton from "@/components/buttons/logout-button.vue";
import SignUpButton from "@/components/buttons/signup-button.vue";
import { useAuth0 } from "@auth0/auth0-vue";
const { isAuthenticated } = useAuth0();

export default {
	
}
</script>

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
