<script setup lang="ts">
import UniicodeLogo from './components/UniicodeLogo.vue';
</script>

<template>
  <div class="container">
    <div class="centered">
      <UniicodeLogo />
    </div>
  </div>
</template>

<style>
.container {
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 576px) {
  .container {
    max-width: 96%;
  }
}

.centered {
  display: flex;
  place-content: center;
  place-items: center;
}
</style>
