<script setup>
import {ref} from 'vue'
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router';
import SiteService from '../services/SiteService'
import { client } from '../types/APIClient';

const route = useRoute()

const site = ref({})
const error = ref(false)
const success = ref(false)

function setSite(){
    client['SiteController.findById'](route.params.id).then(
        result => site.value = result.data
    )
}

onBeforeMount(()=>setSite())

function deleteSite(){
  success.value = false
  error.value = false
  client['SiteController.deleteById'](site.value.id).then(res => {
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
      <v-col cols="1">
        <v-btn icon>
          <RouterLink :to="{ name: 'update-site', params: {id: site.id}}"><v-icon>mdi-application-cog</v-icon></RouterLink>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn icon @click="deleteSite()">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn>Buscar</v-btn>
      </v-col>
    </v-row>
    <div class="recuadro-large">
      <h1>Páginas registradas</h1>
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
  </div>
  </v-container>
</template>
<style>
  @import "../assets/styles/General.css";

  .v-breadcrumbs{
    margin-bottom: 5%;
  }
  .v-breadcrumbs-divider,.v-breadcrumbs-item{
    width: fit-content;
  }  
</style>