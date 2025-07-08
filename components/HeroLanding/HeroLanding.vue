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

    .left {
      height: 100vh;
      min-width: 50vw;
    }
    .right {
      max-width: 40vw;
      display: grid;
      gap: 16px;
    }
  }
</style>
