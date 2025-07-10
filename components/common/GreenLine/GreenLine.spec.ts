import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import GreenLine from './GreenLine.vue';

describe('GreenLine.vue', () => {
  it('render', async () => {
    const component = await mountSuspended(GreenLine, {
      props: { width: '100px', top: '0', left: '0' },
    });
    expect(component).toBeTruthy();
  });
});
