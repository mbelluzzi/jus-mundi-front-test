<template>
  <FullPageSection class="partnership">
    <template #content>
      <a id="partnership" />
      <BlockQuote
        content="Publicising and disseminating information about arbitration has been one of ICC’s commitments since its creation and an instrumental factor in facilitating the development of trade worldwide."
        source="Note to the Parties and the Arbitral Tribunals on the Conduct of Arbitration under the ICC Rules of Arbitration"
        href=""
        link-text="Read the whole document"
        class="centered"
      />
      <div class="centered">
        <h1>Why this partnership?</h1>
        <p>
          Throughout its 100-year history, ICC has brought global business
          together to support an international rules-based order, including the
          promotion of global trade and commerce through the work of the ICC
          International Court of Arbitration.
        </p>
        <p>
          ICC has partnered with Jus Mundi to provide full public access to all
          publishable ICC International Court of Arbitration awards and related
          documents made as of 1 January 2019
        </p>
      </div>
      <div class="icon-text-section">
        <IconTextBlock
          v-for="({ title, imgSrc, imgAlt, text }, index) in blocks"
          :key="index"
          :title="title"
          :img-src="imgSrc"
          :img-alt="imgAlt"
          :text="text"
        />
      </div>
    </template>
    <template #background>
      <PartnerBackground />
    </template>
  </FullPageSection>
</template>

<script setup lang="ts">
  import type { IconTextBlockProps } from '../common/IconTextBlock/IconTextBlock.vue';

  const blocks: IconTextBlockProps[] = [
    {
      imgSrc: '/images/morecontent_icon.svg',
      imgAlt: 'More key arbitration content icon',
      title: 'More key arbitration content',
      text: 'This unique partnership means you will have access to more key arbitration content to level up your arbitration research.',
    },
    {
      imgSrc: '/images/transparency_icon.svg',
      imgAlt: 'More transparency icon',
      title: 'More transparency',
      text: 'You will appreciate the increase in transparency in arbitration!',
    },
    {
      imgSrc: '/images/efficency_icon.svg',
      imgAlt: 'More efficency icon',
      title: 'More efficiency',
      text: "Jus Mundi's AI-powered technology efficiently delivers thorough legal research and due diligence with full confidence.",
    },
  ];
</script>

<style scoped>
  .partnership {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: start;
    p,
    em,
    div {
      font-family: 'IBM PLex Sans';
    }
    > * {
      text-align: center;
    }
    .centered {
      max-width: 40vw;
    }
    .icon-text-section {
      padding-top: 3em;
      padding-bottom: 3em;
      display: grid;
      grid-auto-flow: column;
      align-items: start;
      justify-content: start;
      max-width: 80vw;
      gap: 8em;
    }
  }
</style>
