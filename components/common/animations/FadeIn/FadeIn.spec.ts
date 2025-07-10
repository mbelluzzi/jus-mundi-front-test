import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import FadeIn from './FadeIn.vue';

describe('FadeIn.vue', () => {
  it('render', async () => {
    const component = await mountSuspended(FadeIn, {
      slots: {
        default: () => '<div>Content</div>',
      },
    });

    expect(component).toBeTruthy();
  });
});
