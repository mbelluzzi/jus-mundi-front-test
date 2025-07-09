<template>
  <div>
    <FadeIn :opacity="textAnimationData.opacity" :time="TEXT_ANIMATION_TIME">
      <SlideIn
        :translate-y="textAnimationData.translateY"
        :time="TEXT_ANIMATION_TIME"
      >
        <h1 class="hero-title">
          A Unique Partnership for the Publication of ICC Arbitration Awards
        </h1>
      </SlideIn>
    </FadeIn>
    <FadeIn :opacity="textAnimationData.opacity" :time="TEXT_ANIMATION_TIME">
      <p class="hero-text">
        The International Chamber of Commerce (ICC) & Jus Mundi have joined
        forces to make ICC Arbitration Awards and related materials freely
        available to the global legal community
      </p>
    </FadeIn>
    <FadeIn :opacity="ctaAnimationData.opacity" class="hero-cta">
      <button class="cta" @click="scrollToPartnership">
        <b>> Access ICC Awards</b>
      </button>
    </FadeIn>
  </div>
</template>
<script setup lang="ts">
  const TEXT_ANIMATION_TIME = 1.5;
  const TEXT_ANIMATION_START = 1000;
  const CTA_ANIMATION_START = 2000;

  const textAnimationData = reactive({
    opacity: 0,
    translateY: 50,
  });

  const ctaAnimationData = reactive({
    opacity: 0,
  });

  const { animate: animateText } = useAnimationState(
    textAnimationData,
    {
      opacity: 1,
      translateY: 0,
    },
    TEXT_ANIMATION_START
  );

  const { animate: animateCta } = useAnimationState(
    ctaAnimationData,
    {
      opacity: 1,
    },
    CTA_ANIMATION_START
  );

  const scrollToPartnership = () => {
    document.getElementById('partnership')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  onMounted(() => {
    animateText();
    animateCta();
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
