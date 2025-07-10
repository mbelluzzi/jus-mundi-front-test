import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import SlideIn from './SlideIn.vue';

describe('FadeIn.vue', () => {
  it('render', async () => {
    const component = await mountSuspended(SlideIn, {
      slots: {
        default: () => '<div>Content</div>',
      },
    });

    expect(component).toBeTruthy();
  });
});
