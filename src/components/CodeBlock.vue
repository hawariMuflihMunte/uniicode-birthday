<script setup lang="ts">
const props = defineProps({
  language: {
    type: String,
    required: true
  }
});
</script>

<template>
  <pre><code :class="`language-${props.language}`">
    <slot></slot>
  </code></pre>
</template>

<style>

</style>
