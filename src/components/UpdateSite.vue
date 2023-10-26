<script setup>
import {ref} from 'vue'
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router';
import SiteService from '../services/SiteService'

const route = useRoute()

const site = ref({})

function setSite(){
    SiteService.get(route.params.id).then(
        result => site.value = result
    )
}

onBeforeMount(()=>setSite())

const siteAct = site

const error = ref(false)
const success = ref(false)

function validForm(){
  return true
}

function saveSite(){
    SiteService.update(site.value.id, site.value).then(
        result => {success.value = true}
    ).catch(
      e => {error.value = true}
    )
}

console.log(site)
console.log(siteAct)

</script>
<template>
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
    
    <h1>Modificar parámetros URL</h1>
    <v-sheet>
      <v-alert 
        v-if="success"
        type="success"
        title="La URL se modificó correctamente">
      </v-alert>
      <v-alert 
        v-if="error"
        type="error"
        title="No se pudo modificar la URL">
      </v-alert>
      <v-form>
        <v-text-field
          v-model="siteAct.name"
          label="Nombre"
          required>
        </v-text-field>
        <v-text-field
          v-model="siteAct.url"
          label="URL"
          required>
        </v-text-field>
        <v-text-field
          v-model.number="siteAct.max_depth"
          label="Niveles"
          required>
        </v-text-field>
        <v-text-field
          v-model="siteAct.frequency"
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