<template>
  <div class="green-line" :style="{ width, top, left, transform }" />
</template>

<script setup lang="ts">
  const {
    width,
    top,
    left,
    transform = 'rotate(0deg)',
  } = defineProps<{
    width: string;
    top: string;
    left: string;
    transform?: `rotate(${number}deg)`;
  }>();
</script>

<style scoped>
  .green-line {
    position: absolute;
    height: 2px;
    background: #6ad300;
  }
</style>
