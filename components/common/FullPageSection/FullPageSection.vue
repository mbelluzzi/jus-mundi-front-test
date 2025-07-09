<template>
  <section class="full-page-section">
    <slot name="background" />
    <slot name="content" />
  </section>
</template>

<style>
  .full-page-section {
    height: 100vh;
    width: 100vw;
    margin: 0px;
    position: relative;
  }
</style>
