<script setup lang="ts">
import { ref } from 'vue';

import UniicodeLogo from './components/UniicodeLogo.vue';
import CodeBlock from './components/CodeBlock.vue';

// @ts-ignore
import { codes } from './utils/local-data.js';

const myCodes: any[] = codes;

const openApp = ref(false);

function toggleOpenApp() {
  openApp.value = !openApp.value;
}
</script>

<template>
  <button
    @click="toggleOpenApp"
    class="uniicode-button"
  >
    OPEN
  </button>
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
  margin: 50px 0;
}

.uniicode-button {
  cursor: pointer;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: capitalize;
  letter-spacing: 2px;
  padding: 8px 16px;
  outline: 0;
  border: 0;
  border-radius: 2px;
  background-color: #B7FD00;
  transition: all 200ms linear;
}

.uniicode-button:hover {
  background-color: #d7fd00;
}
</style>
