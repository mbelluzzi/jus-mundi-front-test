<template>
  <div class="hero-partners">
    <Expand
      :scale="ICCBackgroundAnimationData.scale"
      :time="ICC_LOGO_ANIMATION_TIME"
      :class="['logo-icc']"
    >
      <RoundLogoBackground>
        <FadeIn
          :opacity="ICCLogoAnimationData.opacity"
          :time="ICC_LOGO_ANIMATION_TIME"
        >
          <NuxtImg
            src="/images/logo_icc.svg"
            :class="['fluid-image']"
            alt="Logo of The International Chamber of Commerce (ICC)"
          />
        </FadeIn>
      </RoundLogoBackground>
    </Expand>
    <FadeIn
      :opacity="JMLogoAnimationData.opacity"
      :time="JM_LOGO_ANIMATION_TIME"
      class="logo-jm"
    >
      <SlideIn
        :translate-x="JMLogoAnimationData.translateX"
        :translate-y="JMLogoAnimationData.translateY"
        :time="JM_LOGO_ANIMATION_TIME"
      >
        <RoundLogoBackground>
          <NuxtImg
            src="/images/logo_jm.svg"
            class="fluid-image"
            alt="Logo of Jus Mundi"
          />
        </RoundLogoBackground>
      </SlideIn>
    </FadeIn>
    <FadeIn
      :opacity="caseAnimationData.opacity"
      :time="CASE_BG_ANIMATION_TIME"
      class="case-bg"
    >
      <NuxtImg
        src="/images/case_bg.gif"
        alt="GIF for case background"
        width="100%"
        height="100%"
        preload
      />
    </FadeIn>
  </div>
</template>

<script setup lang="ts">
  import { useAnimationState } from '~/composables/useHeroPartnersAnimation';

  const ICC_LOGO_ANIMATION_TIME = 1;
  const ICC_LOGO_ANIMATION_START = 1000;
  const JM_LOGO_ANIMATION_TIME = 0.5;
  const JM_LOGO_ANIMATION_START = 1500;
  const CASE_BG_ANIMATION_TIME = 1;
  const CASE_BG_ANIMATION_START = 2000;

  const ICCBackgroundAnimationData = reactive({
    scale: 0,
  });
  const ICCLogoAnimationData = reactive({
    opacity: 0,
  });
  const JMLogoAnimationData = reactive({
    translateX: -100,
    translateY: 100,
    opacity: 0,
  });
  const caseAnimationData = reactive({
    opacity: 0,
  });

  const { animate: animateICCBackground } = useAnimationState(
    ICCBackgroundAnimationData,
    {
      scale: 1,
    }
  );
  const { animate: animateICCLogo } = useAnimationState(
    ICCLogoAnimationData,
    {
      opacity: 1,
    },
    ICC_LOGO_ANIMATION_START
  );
  const { animate: animateJMLogo } = useAnimationState(
    JMLogoAnimationData,
    {
      translateX: 0,
      translateY: 0,
      opacity: 0.8,
    },
    JM_LOGO_ANIMATION_START
  );
  const { animate: animateCase } = useAnimationState(
    caseAnimationData,
    {
      opacity: 0.8,
    },
    CASE_BG_ANIMATION_START
  );

  onMounted(() => {
    animateICCBackground();
    animateICCLogo();
    animateJMLogo();
    animateCase();
  });
</script>
<style scoped>
  .hero-partners {
    container: size;
    .logo-jm {
      max-width: 250px;
      max-height: 250px;
      left: 150px;
      z-index: 2;
      display: flex;
      justify-content: center;
      justify-items: center;
    }

    .logo-icc {
      max-width: 500px;
      max-height: 500px;
      left: 150px;
      top: 50px;
      z-index: 1;
      display: flex;
      justify-content: center;
      justify-items: center;
    }

    .case-bg {
      position: absolute;
      width: 70cqw;
      height: 70cqh;
      top: 200px;
      left: 0;
      z-index: -1;
      container-type: size;
      /* Adjust with translate for fine-tuning if needed */
      transform: translateX(-10%);
    }
  }
</style>
