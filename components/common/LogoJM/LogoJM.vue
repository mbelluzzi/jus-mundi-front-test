<template>
  <FadeIn :opacity :time="1.5">
    <SlideIn :translate-x="translate.x" :translate-y="translate.y" :time="1.5">
      <RoundLogoBackground :style="{ width: '100%' }">
        <NuxtImg
          src="/images/logo_jm.svg"
          class="fluid-image"
          alt="Logo of Jus Mundi"
        />
      </RoundLogoBackground>
    </SlideIn>
  </FadeIn>
</template>

<script setup lang="ts">
  const translate = ref({ x: -100, y: 100 });
  const opacity = ref(0);
  onMounted(() => {
    setTimeout(() => {
      translate.value.x = 0;
      translate.value.y = 0;
      opacity.value = 0.8;
    }, 2000);
  });
</script>
