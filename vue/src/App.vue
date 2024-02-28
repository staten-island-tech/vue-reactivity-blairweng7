<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">     Home     </RouterLink>
        <RouterLink to="/about">     Cart     </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper
{font-size: 80px;
  text-align: center;
}

</style>

