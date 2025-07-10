import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import HeroPartners from './HeroPartners.vue';

describe('HeroPartners.vue', () => {
  it('renders ICC and JM logos and case background', async () => {
    const component = await mountSuspended(HeroPartners);
    expect(component.html()).toContain('logo_icc.svg');
    expect(component.html()).toContain('logo_jm.svg');
    expect(component.html()).toContain('case_bg.gif');
  });
});
