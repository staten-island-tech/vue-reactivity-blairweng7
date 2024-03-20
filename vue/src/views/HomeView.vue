<template>
  <div class="container">
    <div class="cart">
      <MyCart :cart="cart" />
    </div>

    <div class="items">
      <DestCard
        v-for="destination in destinations"
        :key="destination.name"
        :Destination="destination"
        @add="addToCart(destination)"
      />
    </div>
  </div>
</template>

<script setup>
import DestCard from "@/components/DestCard.vue";
import MyCart from "@/components/MyCart.vue";
import { ref } from "vue";

const cart = ref([]);

function addToCart(destination) {
  cart.value.push(destination);
}

const destinations = [
  {
    name: "SNOW LODGE GREATER YELLOWSTONE SWEATSHIRT",
    price: 38,
    img: "https://us.brandymelville.com/cdn/shop/files/MJB033-8007S071V83700_04_750x.jpg?v=1707494677",
  },
  {
    name: "SKYLAR HEART EYELET TANK",
    price: 18,
    img: "https://us.brandymelville.com/cdn/shop/files/MW922L-1405SI7200QRF_03_750x.jpg?v=1707076991",
  },
  {
    name: "ROSA TIE SWEATPANTS",
    price: 32,
    img: "https://us.brandymelville.com/cdn/shop/files/MCH002-Z094SC0500L-01_750x.jpg?v=1706292312",
  },
  {
    name: "STRIPED SOCKS",
    price: 6,
    img: "https://us.brandymelville.com/cdn/shop/files/MU936BB08SP888_00_750x.jpg?v=1694026314",
  },
  {
    name: "ROBYN RADIO SILENCE LONDON TOP",
    price: 23,
    img: "https://us.brandymelville.com/cdn/shop/files/MLA002C-8005S015T165TV_0_750x.jpg?v=1703915540",
  },
  {
    name: "SKYLAR HEART EYELET TANK",
    price: 18,
    img: "https://us.brandymelville.com/cdn/shop/files/MW922L-1405SI7200QRF_03_750x.jpg?v=1707076991",
  },
  {
    name: "ALEAH COTTON STRIPE SWEATER",
    price: 38,
    img: "https://us.brandymelville.com/cdn/shop/products/MH473-Z037S65600RC_0_750x.jpg?v=1671848121",
  },
  {
    name: "NICO AMERICAN FLAG SWEATER",
    price: 38,
    img: "https://us.brandymelville.com/cdn/shop/files/MNJ225-F03XS00500USA_03_360x.jpg?v=1708700957",
  },
];
</script>

<style scoped>
.container {
  display: flex;
}
.cart {
  width: 20vw;
}

.items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
