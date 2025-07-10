import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import FullPageSection from './FullPageSection.vue';

describe('FullPageSection.vue', () => {
  it('render', async () => {
    const component = await mountSuspended(FullPageSection, {
      slots: {
        background: () => '<div>BG</div>',
        content: () => '<div>Content</div>',
      },
    });
    expect(component).toBeTruthy();
  });
});
