import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import BlockQuote from './BlockQuote.vue';

describe('BlockQuote.vue', () => {
  it('render', async () => {
    const component = await mountSuspended(BlockQuote, {
      props: {
        content: 'Test quote',
        source: 'Test source',
      },
    });
    expect(component).toBeTruthy();
  });
});
