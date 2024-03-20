<template>
  <div class="cards">
      <h2>{{ Destination.name}}</h2>
      <img :src="Destination.img" alt="">
       <h3>Price: ${{ Destination.price }}.00</h3>
       <button id="btn" @click="addToCart()">Add To Cart</button>
  </div>
</template>

<script setup>
const props = defineProps({
  Destination: Object,
});

const emit = defineEmits([
    "add"
])

function addToCart() {
    emit("add")
}
</script>


<style scoped>
h2, h3, button {
  font-size: 1rem;
}
img {
  width: 215.25px;
  height: 322.88px;
  object-fit: cover;
}
.cards{
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 7px;
}
.card{
    width: 20%;
    height:50vh;
}

</style>