<script setup>
import {ref} from 'vue'
import { onBeforeMount } from 'vue'
import SiteService from '../services/SiteService'
import { client } from '../types/APIClient';

const sites = ref([])

function setSites(){
  client['SiteController.find']().then(
        result => sites.value = result.data
    )
}

onBeforeMount(()=>setSites())

console.log(sites)

</script>
<template>
  <v-container>
    <v-btn><RouterLink to="/sites/new">Nueva URL</RouterLink></v-btn>
    <div class="recuadro-large">
      <h1>Tus sitios</h1>
      <v-divider></v-divider>
      <v-table>
        <thead>
          <th>Nombre</th>
          <th>URL</th>
          <th>Niveles</th>
          <th>Frecuencia</th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="site in sites" :key="site.id">
            <td>{{ site.name }}</td>
            <td>{{ site.url }}</td>
            <td>{{ site.max_depth }}</td>
            <td>{{ site.frequency }}</td>
            <td><RouterLink :to="{ name: 'site-detail', params: {id: site.id}}">Ingresar</RouterLink></td>
          </tr>  
        </tbody>
      </v-table>
    </div>
  </v-container>
</template>
<style>
  @import "../assets/styles/General.css";
  .v-btn{
    width: fit-content;
  }
</style>