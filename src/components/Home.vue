<script setup>
import {ref} from 'vue'
import { onBeforeMount } from 'vue'
import btnIn from '../components/Btns.vue';

</script>
<template>
  <div class="recuadro-small">
    <img src="../assets/icon-web-search.png">
    <h1> Service Search Spec </h1>
    <h2>Para continuar tenés que iniciar sesión</h2>
  </div>
</template>
<style>
  @import "../assets/styles/General.css";

  .recuadro-small{
    text-align: center;
  }
  .recuadro-small img{
    margin: 2% auto;
  }
  /*.v-sheet{
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
  }*/
  
  
</style>