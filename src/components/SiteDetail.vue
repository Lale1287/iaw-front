<script setup>
import {ref} from 'vue'
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router';
import SiteService from '../services/SiteService'
import Nav from '../components/Nav.vue';

const route = useRoute()

const site = ref({})

function setSite(){
    SiteService.get(route.params.id).then(
        result => site.value = result
    )
}

onBeforeMount(()=>setSite())

console.log(site)

</script>
<template>
  <Nav></Nav>
  <v-container>
    <h1>{site.name}</h1>
    <v-sheet v-if='site'>
      Detalle      
    </v-sheet>
  </v-container>
</template>
<style>
  @import "../assets/styles/General.css";

</style>