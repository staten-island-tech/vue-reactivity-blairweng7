<template>
  <div class="container">
    <DestCard
      v-for="destination in destinations"
      :key="destination.name"
      :Destination="destination"
      @click = "addToCart(destination)"
    />
  </div>
</template>

<script setup>
import DestCard from "@/components/DestCard.vue";
const destinations = [
  {
    name: "SNOW LODGE GREATER YELLOWSTONE SWEATSHIRT",
    price: "$38",
    img: "https://us.brandymelville.com/cdn/shop/files/MJB033-8007S071V83700_04_750x.jpg?v=1707494677",
  },
  {
    name: "SKYLAR HEART EYELET TANK",
    price: "$18",
    img: "https://us.brandymelville.com/cdn/shop/files/MW922L-1405SI7200QRF_03_750x.jpg?v=1707076991",
  },
 {
    name: "ROSA TIE SWEATPANTS",
    price: "$32",
    img: "https://us.brandymelville.com/cdn/shop/files/MCH002-Z094SC0500L-01_750x.jpg?v=1706292312",
  },
  {
    name: "KIERA TEDDY BEAR PANTS",
    price: "$38",
    img: "https://us.brandymelville.com/cdn/shop/files/MC002LP-1429S07100VT24_02_750x.jpg?v=1706054838",
  },
  {
    name: "STRIPED SOCKS",
    price: "$6",
    img: "https://us.brandymelville.com/cdn/shop/files/MU936BB08SP888_00_750x.jpg?v=1694026314",
  },
  {
    name: "ROBYN RADIO SILENCE LONDON TOP",
    price: "$23",
    img: "https://us.brandymelville.com/cdn/shop/files/MLA002C-8005S015T165TV_0_750x.jpg?v=1703915540",
  },
  {
    name: "SKYLAR HEART EYELET TANK",
    price: "$18",
    img: "https://us.brandymelville.com/cdn/shop/files/MW922L-1405SI7200QRF_03_750x.jpg?v=1707076991",
  },
  {
    name: "ALEAH COTTON STRIPE SWEATER",
    price: "$38",
    img: "https://us.brandymelville.com/cdn/shop/products/MH473-Z037S65600RC_0_750x.jpg?v=1671848121",
  },
  {
    name: "VIVIAN DRESS",
    price: "$42",
    img: "https://us.brandymelville.com/cdn/shop/files/mh546v-z129s1620000_1_1_750x.jpg?v=1707347231",
  },
  {
    name: "THE ROSE",
    price: "$1000",
    img: "https://thelovestore.com/cdn/shop/products/0001_DSC_3871.jpg?v=1635344770"
  }
];
</script>

<style scoped>

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  background-color: rgb(255, 239, 216);
}
</style>