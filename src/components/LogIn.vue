<script setup>
import {ref} from 'vue'
import { onBeforeMount } from 'vue'
import btnIn from '../components/Btns.vue';

</script>
<template>
    <v-sheet max-width="400" class="mx-auto">
    <v-form validate-on="submit lazy" @submit.prevent="submit">
      <img src="../assets/icon-web-search.png">
      <v-text-field
        label="Iniciar sesión"
      ></v-text-field>
      <RouterLink to="/sites"><btnIn label="Google"><v-icon >backup</v-icon></btnIn></RouterLink>
    </v-form>
  </v-sheet>
</template>
<style>
  @import "../assets/styles/General.css";
  .v-sheet{
    margin: 0;
    width: 40%;
  }
  .v-form{
    display: flex;
    flex-direction: column;
    margin: 10% auto;
    background-color: red;
    margin-top: 10%;
    width: 100%;
    padding: 1rem;
  }
  img{
    height: 140px;
    width: 140px;
    display: flex;
    align-self: center;
    --b: 5px;  /* border thickness*/
    --s: 80px; /* size of the corner*/
    --g: 20px; /* the gap*/
    --c: #EDC951; 
    padding: calc(var(--b) + var(--g));
    background-image:
      conic-gradient(from  90deg at top    var(--b) left  var(--b),#0000 25%,var(--c) 0),
      conic-gradient(from -90deg at bottom var(--b) right var(--b),#0000 25%,var(--c) 0);
    background-position:
      var(--_p,0%) var(--_p,0%),
      calc(100% - var(--_p,0%)) calc(100% - var(--_p,0%));
    background-size: var(--s) var(--s);
    background-repeat: no-repeat;
    cursor: pointer;
    transition: 
      background-position .3s var(--_i,.3s), 
      background-size .3s calc(.3s - var(--_i,.3s));
    }
    img:hover {
    background-size: calc(90% - var(--g)) calc(100% - var(--g));
    --_p: calc(var(--g)/2);
    --_i: 0s;
  }
  
</style>