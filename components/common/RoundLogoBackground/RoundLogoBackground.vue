<template>
  <div class="logo-background">
    <slot />
  </div>
</template>
<style>
  .logo-background {
    aspect-ratio: 1 / 1;
    background-color: var(--background-color);
    border-radius: 100%;
    padding: 30px;
    overflow: hidden;
    box-shadow: 0px 0px 128px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }
</style>
