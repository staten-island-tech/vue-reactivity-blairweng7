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
function addToCart() {
  store.addToCart(item);
  clicked.value++;
}
</script>

<style scoped>
img {
  width: 215.25px;
  height: 322.88px;
  object-fit: cover;
}
.container{
    width: 318px;
    height:476px;
    margin:.5rem;
    padding-top: 1rem;
    padding-right: .5rem;
    padding-left: .5rem;
    background-color: rgb(255, 255, 255);
    border-radius:3%;
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

