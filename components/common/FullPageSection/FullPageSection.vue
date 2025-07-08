<template>
  <section class="full-page-section">
    <div class="background-slot">
      <slot name="background" />
    </div>
    <div class="content-slot">
      <slot name="content" />
    </div>
  </section>
</template>

<style>
  .full-page-section {
    height: 100vh;
    width: 100vw;
    margin: 0px;
    padding: 16px;
    position: relative;
  }
  .background-slot {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    pointer-events: none;
  }
  .content-slot {
    position: relative;
    z-index: 1;
  }
</style>
