import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import RoundLogoBackground from './RoundLogoBackground.vue';

describe('RoundLogoBackground.vue', () => {
  it('render', async () => {
    const component = await mountSuspended(RoundLogoBackground, {
      slots: {
        default: () =>
          '<NuxtImg src="/images/logo_icc.svg" alt="Logo of The International Chamber of Commerce (ICC)/>',
      },
    });
    expect(component).toBeTruthy();
  });
});
