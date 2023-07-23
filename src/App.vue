<script setup lang="ts">
import UniicodeLogo from './components/UniicodeLogo.vue';
import CodeBlock from './components/CodeBlock.vue';

// @ts-ignore
import { codes } from './utils/local-data.js';

const myCodes: any[] = codes;
</script>

<template>
  <div class="container">
    <div class="centered">
      <UniicodeLogo />
    </div>
    <main>
      <template v-for="(code, language) in myCodes" :key="language">
        <CodeBlock :language="language">
          {{ code() }}
        </CodeBlock>
      </template>
    </main>
  </div>
</template>

<style>
.container {
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
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

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  place-items: center;
}
</style>
