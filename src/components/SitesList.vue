<script setup>
import {ref} from 'vue'
import { onBeforeMount } from 'vue'
import SiteService from '../services/SiteService'

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
    <v-container>
      <v-table>
        <thead>
          <th>Nombre</th>
          <th>URL</th>
        </thead>
        <tbody>
          <tr v-for="site in sites" :key="site.id">
            <td>{{ site.name }}</td>
            <td>{{ site.url }}</td>
          </tr>  
        </tbody>
      </v-table>
    </v-container>
</template>
<style>

</style>