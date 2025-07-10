import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import IconTextBlock from './IconTextBlock.vue';

describe('IconTextBlock.vue', () => {
  it('render', async () => {
    const component = await mountSuspended(IconTextBlock, {
      props: {
        imgSrc: 'https://example.com/icon.png',
        text: 'Test Text',
        title: 'Test Title',
        imgAlt: 'Test Icon',
      },
    });
    expect(component).toBeTruthy();
  });
});
