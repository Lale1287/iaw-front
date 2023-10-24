<script setup>
import {ref} from 'vue'
import { onBeforeMount } from 'vue'
import SiteService from '../services/SiteService'
import Nav from '../components/Nav.vue';

const sites = ref([])

function setSites(){
    SiteService.getSites().then(
        result => sites.value = result
    )
}

onBeforeMount(()=>setSites())

console.log(sites)

</script>
<template>
  <Nav></Nav>
  <v-container>
    <v-btn><RouterLink to="/sites/new">Nueva URL</RouterLink></v-btn>
    <v-table>
      <thead>
        <th>Nombre</th>
        <th>URL</th>
        <th>Niveles</th>
        <th>Frecuencia</th>
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
  </v-container>
</template>
<style>
  @import "../assets/styles/General.css";
  .v-btn{
    width: fit-content;
  }
</style>