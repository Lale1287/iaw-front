<script setup>
import {ref} from 'vue'
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router';
import SiteService from '../services/SiteService'

const route = useRoute()

const site = ref({})
const error = ref(false)
const success = ref(false)

function setSite(){
    SiteService.get(route.params.id).then(
        result => site.value = result
    )
}

onBeforeMount(()=>setSite())

function deleteSite(){
  success.value = false
  error.value = false
  SiteService.delete(site.value.id).then(res => {
    success.value = true
    site.value = false
  }).catch( e => {
    error.value = true
  })
}

</script>
<template>
  <v-container>
      <v-alert v-if="success" type="success" title="Se eliminó correctamente"></v-alert>
      <v-alert v-if="error" type="error" title="No se pudo eliminar el sitio"></v-alert>
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
    <v-row v-if='site'>
      <v-col>
        <v-table>
          <thead>
            <th>Nombre</th>
            <th>UUID</th>
            <th>Niveles</th>
            <th>Frecuencia</th>
          </thead>
          <tbody>
            <tr>
              <td>{{ site.name }}</td>
              <td>{{ site.id }}</td>
              <td>{{ site.max_depth }}</td>
              <td>{{ site.frequency }}</td>
            </tr>  
          </tbody>
        </v-table>
      </v-col>
      <v-col cols="3">
        <v-btn><RouterLink :to="{ name: 'update-site', params: {id: site.id}}">Cambiar Configuración</RouterLink></v-btn>
        <v-btn @click="deleteSite()">Eliminar</v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn>Buscar</v-btn>
      </v-col>
    </v-row>
    <v-table>
      <thead>
        <th>URL</th>
        <th>Última actualización</th>
      </thead>
      <tbody>
        <tr>
          <td>{{ site.url }}/home</td>
          <td>14 de septiembre</td>
        </tr>  
      </tbody>
    </v-table>
  </v-container>
</template>
<style>
  @import "../assets/styles/General.css";
  .v-sheet{
    width: 55%;
  }
  thead, tbody {
    display: flex;
  }
  tr {
    display: flex;
  }
</style>