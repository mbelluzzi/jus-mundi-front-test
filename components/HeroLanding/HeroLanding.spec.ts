import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import HeroLanding from './HeroLanding.vue';
import HeroPartners from './HeroPartners/HeroPartners.vue';
import HeroBackground from './HeroBackground/HeroBackground.vue';
import HeroText from './HeroText/HeroText.vue';

describe('HeroLanding.vue', () => {
  it('renders HeroPartners, HeroText, and HeroBackground components', async () => {
    const component = await mountSuspended(HeroLanding);
    expect(component.findComponent(HeroPartners).exists()).toBe(true);
    expect(component.findComponent(HeroText).exists()).toBe(true);
    expect(component.findComponent(HeroBackground).exists()).toBe(true);
    expect(component.find('.hero-landing').exists()).toBe(true);
  });
});
