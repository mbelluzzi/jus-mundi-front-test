import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import Expand from './Expand.vue';

describe('Expand.vue', () => {
  it('render', async () => {
    const component = await mountSuspended(Expand, {
      slots: {
        default: () => '<div>Content</div>',
      },
    });

    expect(component).toBeTruthy();
  });
});
