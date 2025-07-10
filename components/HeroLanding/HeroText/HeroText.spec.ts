import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import HeroText from './HeroText.vue';

describe('HeroText.vue', () => {
  it('renders the hero title, text, and CTA button', async () => {
    const component = await mountSuspended(HeroText);
    expect(component.find('.hero-title').exists()).toBe(true);
    expect(component.find('.hero-text').exists()).toBe(true);
    expect(component.find('.cta').exists()).toBe(true);
    expect(component.text()).toContain(
      'A Unique Partnership for the Publication of ICC Arbitration Awards'
    );
    expect(component.text()).toContain(
      'The International Chamber of Commerce (ICC) & Jus Mundi'
    );
    expect(component.text()).toContain('Access ICC Awards');
  });
});
