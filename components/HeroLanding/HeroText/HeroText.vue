<template>
  <div>
    <FadeIn :opacity="textAnimationData.opacity" :time="textAnimationData.time">
      <SlideIn
        :translate-y="textAnimationData.translateY"
        :time="textAnimationData.time"
      >
        <h1 class="hero-title">
          A Unique Partnership for the Publication of ICC Arbitration Awards
        </h1>
      </SlideIn>
    </FadeIn>
    <FadeIn :opacity="textAnimationData.opacity" :time="textAnimationData.time">
      <p class="hero-text">
        The International Chamber of Commerce (ICC) & Jus Mundi have joined
        forces to make ICC Arbitration Awards and related materials freely
        available to the global legal community
      </p>
    </FadeIn>
    <FadeIn :opacity="ctaAnimationData.opacity" class="hero-cta">
      <button class="cta"><b>> Access ICC Awards</b></button>
    </FadeIn>
  </div>
</template>
<script setup lang="ts">
  const textAnimationData = ref({
    opacity: 0,
    translateY: 50,
    time: 1.5,
  });

  const ctaAnimationData = ref({
    opacity: 0,
    time: 0.5,
  });

  const animate = () => {
    setTimeout(() => {
      textAnimationData.value.opacity = 1;
      textAnimationData.value.translateY = 0;
    }, 1000);
    setTimeout(() => {
      ctaAnimationData.value.opacity = 1;
    }, 2000);
  };

  onMounted(() => {
    animate();
  });
</script>
<style>
  .hero-title {
    margin: 0px;
  }
  .hero-text {
    font-size: 20px;
  }
  .hero-cta {
    justify-content: start;
    .cta {
      margin-top: 12em;
      text-transform: uppercase;
    }
  }
</style>
