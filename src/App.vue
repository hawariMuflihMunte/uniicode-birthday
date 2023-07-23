<script setup lang="ts">
import UniicodeLogo from './components/UniicodeLogo.vue';

const myCode = `const foo = 'bar';

console.log(foo)`;

</script>

<template>
  <div class="container">
    <div class="centered">
      <UniicodeLogo />
    </div>
    <pre><code class="language-js">
      {{ myCode }}
    </code></pre>
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
