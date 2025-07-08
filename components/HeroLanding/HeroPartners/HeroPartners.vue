<template>
  <div>
    <Expand
      :scale="ICCLogoAnimationData.scale"
      :time="ICCLogoAnimationData.expandTime"
      :class="['logo-icc']"
    >
      <RoundLogoBackground>
        <FadeIn
          :opacity="ICCLogoAnimationData.opacity"
          :time="ICCLogoAnimationData.opacityTime"
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
      :time="JMLogoAnimationData.opacityTime"
      class="logo-jm"
    >
      <SlideIn
        :translate-x="JMLogoAnimationData.translateX"
        :translate-y="JMLogoAnimationData.translateY"
        :time="JMLogoAnimationData.translateTime"
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
      :time="caseAnimationData.time"
      class="case-bg"
    >
      <NuxtImg src="/images/case_bg.gif" alt="GIF for case background" />
    </FadeIn>
  </div>
</template>

<script setup lang="ts">
  const ICCLogoAnimationData = ref({
    scale: 0,
    expandTime: 1,
    opacity: 0,
    opacityTime: 1,
  });
  const JMLogoAnimationData = ref({
    translateX: -100,
    translateY: 100,
    translateTime: 0.5,
    opacity: 0,
    opacityTime: 0.5,
  });
  const caseAnimationData = ref({
    opacity: 0,
    time: 1,
  });

  const animate = () => {
    ICCLogoAnimationData.value.scale = 1;
    setTimeout(() => {
      ICCLogoAnimationData.value.opacity = 1;
      ICCLogoAnimationData.value.opacityTime = 1;
    }, 1000);
    setTimeout(() => {
      JMLogoAnimationData.value.translateX = 0;
      JMLogoAnimationData.value.translateY = 0;
      JMLogoAnimationData.value.opacity = 0.8;
      caseAnimationData.value.opacity = 1;
    }, 2000);
  };

  onMounted(() => {
    animate();
  });
</script>
<style scoped>
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
    width: 80%;
    height: 80%;
    top: 100px;
    left: -200px;
    z-index: -1;
  }
</style>
