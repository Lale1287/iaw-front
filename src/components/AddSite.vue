<script setup>
import {ref} from 'vue'
import SiteService from '../services/SiteService'
import Nav from '../components/Nav.vue';

const site = ref({
  'name':'',
  'url':'',
  'max_depth':'',
  'frequency':'',
})

const error = ref(false)
const success = ref(false)

function validForm(){
  return true
}

function saveSite(){
    SiteService.create(site.value).then(
        result => {success.value = true}
    ).catch(
      e => {error.value = true}
    )
}

console.log(site)

</script>
<template>
  <Nav></Nav>
  <v-container>
    <h1>Cargar nueva URL</h1>
    <v-sheet>
      <v-alert 
        v-if="success"
        type="success"
        title="URL cargada correctamente">
      </v-alert>
      <v-alert 
        v-if="error"
        type="error"
        title="No se pudo cargar la URL">
      </v-alert>
      <v-form>
        <v-text-field
          v-model="site.name"
          label="Nombre"
          required>
        </v-text-field>
        <v-text-field
          v-model="site.url"
          label="URL"
          required>
        </v-text-field>
        <v-text-field
          v-model.number="site.max_depth"
          label="Niveles"
          required>
        </v-text-field>
        <v-text-field
          v-model="site.frequency"
          label="Frecuencia"
          required>
        </v-text-field>
        <v-btn @click="saveSite()"
          block color="grey"
          :disabled="!validForm()">
          Guardar
        </v-btn>
      </v-form>
    </v-sheet>
  </v-container>
</template>
<style>
  @import "../assets/styles/General.css";

</style>