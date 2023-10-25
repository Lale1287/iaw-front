<script setup>
import {ref} from 'vue'
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router';
import SiteService from '../services/SiteService'
import Nav from '../components/Nav.vue';
import Breadcrumbs from '../components/Breadcrumbs.vue';

const route = useRoute()

const site = ref({})

function setSite(){
    SiteService.get(route.params.id).then(
        result => site.value = result
    )
}

onBeforeMount(()=>setSite())

</script>
<template>
  <Nav></Nav>
  <v-container>
    <v-breadcrumbs :items="[
		  {
			title: 'Tus sitios',
			disabled: false,
			to: '/sites',
		  },
		  {
			title: `${site.url}`,
			disabled: true,
			href: '#',
		  },
		]">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
	  </v-breadcrumbs>
    <h1>{{site.name}}</h1>
    <v-sheet v-if='site'>
      Detalle      
    </v-sheet>
  </v-container>
</template>
<style>
  @import "../assets/styles/General.css";

</style>