<script setup>

</script>
<template>
    <v-container
      class="bg-surface-variant mb-6">
      <v-row align="start" no-gutters style="height: 150px;">
        <v-col v-for="n in 3" :key="n">
          <v-sheet class="pa-2 ma-2">
            Contenido
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
</template>
<style>

</style>