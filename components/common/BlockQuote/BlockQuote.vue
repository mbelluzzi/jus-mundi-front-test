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
      <a :href target="_blank" rel="noopener noreferrer" class="link-text">
        <b>{{ linkText }}</b>
      </a>
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
  .link-text {
    color: var(--typography-font-color);
    font-family: 'Lato';
    letter-spacing: 2px;
    font-size: 16px;
    text-transform: uppercase;
  }
  .blockquote {
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    flex-flow: column;
    gap: 1em;

    em {
      font-family: 'Larken';
      font-size: 20px;
      line-height: 48px;
      display: block;
    }

    em::before,
    em::after {
      position: relative;
      display: inline-block;
    }
    em::before {
      content: url('/images/quote_2.svg');
      left: -4em;
    }
    em::after {
      content: url('/images/quote_1.svg');
      left: 8em;
    }
  }
  .source {
    max-width: 640px;
  }
</style>
