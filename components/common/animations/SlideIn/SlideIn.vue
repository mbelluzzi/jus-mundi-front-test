<template>
  <div
    class="animation-wrapper"
    :style="{
      transform: `translate(${translateX}px, ${translateY}px)`,
      transition: `transform ${time}s ease-in-out`,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
  const {
    translateX = 0,
    translateY = 0,
    time = 1,
  } = defineProps<{
    translateX?: number;
    translateY?: number;
    time?: number;
  }>();
</script>
