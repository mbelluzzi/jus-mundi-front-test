<template>
  <div class="background">
    <slot />
  </div>
</template>

<style scoped>
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    pointer-events: none;
  }
</style>
