<template>
  <FullPageSection>
    <template #content>
      <div class="hero-landing">
        <HeroPartners class="left" />
        <HeroText class="right" />
      </div>
    </template>
    <template #background>
      <HeroBackground />
    </template>
  </FullPageSection>
</template>

<style>
  .hero-landing {
    display: flex;
    align-items: center;
    justify-content: start;
    .left {
      height: 100vh;
      min-width: 50vw;
      z-index: -1;
    }
    .right {
      max-width: 40vw;
      display: grid;
      gap: 16px;
    }
  }
</style>
