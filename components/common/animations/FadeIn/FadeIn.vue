<template>
  <div
    class="animation-wrapper"
    :style="{
      opacity,
      transition: `opacity ${time}s ease-in-out`,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
  const { opacity = 1, time = 1 } = defineProps<{
    opacity?: number;
    time?: number;
  }>();
</script>
