<template>
  <div class="container">
    <h1>{{ Destination.name }}</h1>
    <img :src="Destination.img" alt="" />
    <h2>{{ Destination.price }}</h2>
    <button @click="$emit('addToCart')">Add to Cart</button>
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
  width: 100px;
  height: 120px;
  object-fit: cover;
}
h1 {
font-size: 20px;
}
h2 {
  font-size: 15px;
}
div {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}
</style>

