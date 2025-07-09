<template>
  <div class="icon-text-block">
    <NuxtImg :src="imgSrc" :alt="imgAlt" width="48px" height="48px" />
    <div>
      <b>{{ title }}</b>
    </div>
    <div>{{ text }}</div>
  </div>
</template>

<script module lang="ts">
  export interface IconTextBlockProps {
    imgSrc: string;
    imgAlt?: string;
    title: string;
    text: string;
  }
</script>

<script setup lang="ts">
  const {
    imgSrc,
    imgAlt = 'Icon',
    title,
    text,
  } = defineProps<IconTextBlockProps>();
</script>

<style>
  .icon-text-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    > * {
      text-align: center;
    }
  }
</style>
