<script setup lang="ts">
const props = defineProps({
  language: {
    type: String,
    required: true
  }
});
</script>

<template>
  <article>
    <pre><code :class="`language-${props.language}`">
      <slot></slot>
    </code></pre>
  </article>
</template>

<style scoped>
article {
  min-width: 240px;
  max-width: 480px;
}

pre {
  max-width: 100%;
}
</style>
