<template>
    <div id="container">
      <h1>{{ Destination.name }}</h1>
      <img :src="Destination.img" alt="" />
      <h2>{{ Destination.price }}</h2>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  const props = defineProps({
    Destination: Object,
  });
  //clicker logic
  const clicked = ref(0);
  function increment() {
    clicked.value++;
  }
  </script>
  
  <style scoped>
  img {
    width: 250px;
    height: 300px;
    object-fit: cover;
  }
  </style>