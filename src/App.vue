<script setup>
  import { computed, ref, watch } from 'vue';
  import { calcularAhorro, formatearDinero } from './helpers'


  const objetivo = ref(0);
  const plazos = ref(6);
  const total = ref(calcularAhorro(objetivo.value , plazos.value))
  const MIN = 0;
  const MAX = 1500000;
  const STEP = 50000;

  const calcularCuotas = ()=>{
   total.value = calcularAhorro(objetivo.value, plazos.value)
  }

</script>

<template>
  <div class="bg-teal-100 mx-auto px-5 py-9 shadow-lg w-4/5 md:w-3/4 mt-20 rounded-md">

    <h1 class="text-center mb-5 font-bold text-4xl">Ahorra con <span class="text-teal-600">propósito</span> </h1>
    
    <div class="flex flex-col gap-5">
      <h2 class="text-xl text-center mt-5">¿Cuánto quieres ahorrar?</h2>
      <input type="range"
        class="accent-teal-600 hover:accent-teal-700"
        :min="MIN"
        :max="MAX"
        :step="STEP"
        v-model.number="objetivo">
      <p class="text-center text-2xl font-bold">{{ formatearDinero(objetivo) }}</p>
      
      <select class="w-full p-1 border-1 border-teal-600 focus:outline-2 focus:outline-offset-2 rounded-2xl focus:outline-teal-400"
        v-model="plazos">
        <option value="3">3 meses</option>
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
      </select>
      
      <button class="bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-full w-2/3 mx-auto py-2" @click="calcularCuotas()">Calcular cuota</button>
    </div>
    <div class="bg-teal-950/20 p-5 mt-7 rounded-2xl">
      <p>Objetivo: {{ formatearDinero(objetivo) }}</p>
      <p>Meses: {{ plazos }} </p>
      <p>Cuota: {{ formatearDinero(total) }}</p>
    </div>

  </div>
</template>

<style scoped>

</style>
