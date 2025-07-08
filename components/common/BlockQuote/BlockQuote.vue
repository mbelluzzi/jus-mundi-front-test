<template>
  <div class="blockquote">
    <blockquote>
      <em>
        {{ content }}
      </em>
    </blockquote>
    <div class="source">
      {{ source }}
    </div>
    <slot name="link">
      <a :href target="_blank" rel="noopener noreferrer">{{ linkText }}</a>
    </slot>
  </div>
</template>

<script setup lang="ts">
  const {
    content,
    source,
    href = '',
    linkText = 'Read more',
  } = defineProps<{
    content: string;
    source: string;
    href?: string;
    linkText?: string;
  }>();
</script>

<style scoped>
  .blockquote {
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    flex-flow: column;
    margin: 0 16em;
    gap: 1em;
    * {
      text-align: center;
    }
  }

  .source {
    max-width: 640px;
  }

  blockquote em::before {
    position: relative;
    content: url('images/quote_2.svg');
    display: inline-block;
    line-height: 0.5;
    left: -4em;
  }

  blockquote em::after {
    position: relative;
    content: url('images/quote_1.svg');
    display: inline-block;
    line-height: 0.5;
    left: 8rem;
  }

  blockquote em {
    font-weight: 500;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    display: block;
    max-width: 640px;
  }
</style>
