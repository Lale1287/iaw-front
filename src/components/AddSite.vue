<script setup>
import {ref} from 'vue'
import SiteService from '../services/SiteService'

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
			title: 'Nuevo sitio',
			disabled: true,
			href: '#',
		  },
		]">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
	  </v-breadcrumbs>
    <div class="recuadro-small">
    <h1>Cargar nuevo sitio</h1>
      <v-alert 
        v-if="success"
        type="success"
        title="El sitio se cargó correctamente">
      </v-alert>
      <v-alert 
        v-if="error"
        type="error"
        title="No se pudo cargar el sitio">
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
        <v-select
          v-model="site.frequency"
          label="Frecuencia"
          density="compact"
          :items="['Diaria', 'Semanal', 'Mensual']"
          :menu-props="{maxWidth: 100}"
          required>
        </v-select>
        <v-btn @click="saveSite()"
          :disabled="!validForm()">
          Guardar
        </v-btn>
      </v-form>
    </div>
  </v-container>
</template>
<style>
  @import "../assets/styles/General.css";
  
  .v-select .v-select__selection-text{
    text-align: left;
  }
</style>