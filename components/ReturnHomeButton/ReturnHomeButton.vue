<template>
  <button class="return-home" @click="onClick">
    <NuxtImg src="/images/ico-arrow_up.svg" alt="Try Jus Mundi" width="16px" />
    <span> Try Jus Mundi </span>
  </button>
</template>

<script setup lang="ts">
  const onClick = () => {
    console.log('click');
    document.getElementById('landing')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
</script>
<style scoped>
  .return-home {
    position: fixed;
    right: 100px;
    top: 50px;
    z-index: 10;
    background-color: var(--background-color);
    box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.3);
    color: #2c2b2e;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
</style>
