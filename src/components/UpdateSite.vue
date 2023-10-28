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
console.log(site.value)
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
			disabled: false,
			href: `/sites/${site.id}`,
		  },
      {
			title: 'Modificar configuración',
			disabled: false,
			to: '#',
		  }
		]">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
	  </v-breadcrumbs>
    <div class="recuadro-small">
    <h1>Modificar parámetros del sitio</h1>
      <v-alert 
        v-if="success"
        type="success"
        title="El sitio se modificó correctamente">
      </v-alert>
      <v-alert 
        v-if="error"
        type="error"
        title="No se pudo modificar el sitio">
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
  .v-sheet{
    width: 55%;
  }
  thead, tbody {
    display: flex;
  }
  tr {
    display: flex;
  }
  .v-select .v-select__selection-text{
    text-align: left;
  }
</style>