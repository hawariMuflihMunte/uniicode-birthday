<script setup lang="ts">
import uniicodeJpg from './img/uniicode.jpg';
import uniicodeWebp from './img/uniicode.webp';

// Check WebP support
const supportsWebp = () => {
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

const isWebpSupported = supportsWebp();
</script>

<template>
  <picture class="uniicode-logo-container">
    <source
      v-if="isWebpSupported"
      :srcset="isWebpSupported ? uniicodeWebp : uniicodeJpg"
      type="image/webp"
    />
    <img
      :src="uniicodeJpg"
      alt="UNIICODE logo"
      class="uniicode-logo"
    />
  </picture>
</template>

<style scoped>
.uniicode-logo-container {
  max-width: 100%;
}

.uniicode-logo {
  width: 200px;
  border-radius: 50%;
  animation: spin 6s infinite linear forwards;
}

.uniicode-logo:hover {
  animation-play-state: paused;
}

@keyframes spin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
