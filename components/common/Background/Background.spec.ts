import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import Background from './Background.vue';

describe('Background.vue', () => {
  it('render', async () => {
    const component = await mountSuspended(Background);

    expect(component).toBeTruthy();
  });
});
