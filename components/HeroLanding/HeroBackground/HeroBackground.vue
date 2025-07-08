<script setup lang="ts">
  import GreenLine from '~/components/common/GreenLine/GreenLine.vue';
</script>

<template>
  <div class="hero-background">
    <GreenLine width="30px" top="5%" left="0.5em" transform="rotate(0deg)" />
    <GreenLine width="30px" top="90%" left="0" transform="rotate(90deg)" />
    <GreenLine width="30px" top="90%" left="90%" transform="rotate(45deg)" />
    <div class="bottom-gradient" />
  </div>
</template>

<style scoped>
  hero-background {
    position: relative;
    width: 100vh;
    height: 100vh;
    overflow: hidden;
    background-color: #f5f5f5; /* Fallback color */
  }
  .bottom-gradient {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5%;
    background: linear-gradient(to bottom, transparent 0%, #f5f5f5 100%);
    pointer-events: none;
    z-index: 10;
  }
</style>
