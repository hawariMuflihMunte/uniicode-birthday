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
  width: 100%;
  min-width: 240px;
  max-width: 480px;
}

pre,
code {
  max-width: 100%;
  min-height: 100%;
}
</style>
