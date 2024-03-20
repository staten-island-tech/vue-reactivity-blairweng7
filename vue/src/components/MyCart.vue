<template>
    <div>
      <h1>Shopping Cart</h1>
      <div v-if="cart.length === 0">
        <p>Cart is empty</p>
      </div>
      <div v-else class="item">
        <div v-for="(items, index) in cart" :key="index">
          <p>{{ items.name }} - ${{ items.price }}</p>
          <button @click="removeItem(index)">Remove</button>
        </div>
        <p>Total: ${{ calculateTotal() }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
    const props = defineProps([
      'cart'
    ])
      function removeItem(index) {
        props.cart.splice(index, 1);
      }
      function calculateTotal() {
        let total = 0
        props.cart.forEach((item)=>total+=item.price)
        return total
      }
  </script>
  
  <style>
  h1 {
    font-size: 2rem;
  }
  p, button {
    font-size: 1rem;
  }
  .item {
    margin: 5px;
  }
  button {
    margin-bottom: 15px;
  }
</style>