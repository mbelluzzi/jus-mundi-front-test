<template>
  <div
    class="animation-wrapper"
    :style="{
      scale,
      transition: `scale ${time}s ease-in-out`,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
  const { scale = 1, time = 1 } = defineProps<{
    scale?: number;
    time?: number;
  }>();
</script>
