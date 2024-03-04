<template>
    <div>
      <h1>Shopping Cart</h1>
      <div v-if="cart.length === 0">
        <p>Cart is empty</p>
      </div>
      <div v-else>
        <div v-for="(items, index) in cart" :key="index">
          <p>{{ items.name }} - ${{ items.price }}</p>
          <button @click="removeItem(index)">Remove</button>
        </div>
        <p>Total: ${{ calculateTotal() }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cart: [
        ]
      };
    },
    methods: {
      removeItem(index) {
        this.cart.splice(index, 1);
      },
      calculateTotal() {
        return this.cart.reduce((total, item) => total + item.price, 0);
      }
    }
  };
  </script>
  