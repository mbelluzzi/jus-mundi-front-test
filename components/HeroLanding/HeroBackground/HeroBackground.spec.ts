import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import HeroBackground from './HeroBackground.vue';
import GreenLine from '~/components/common/GreenLine/GreenLine.vue';

describe('HeroBackground.vue', () => {
  it('renders all GreenLine components and the bottom gradient', async () => {
    const component = await mountSuspended(HeroBackground);
    expect(component.findAllComponents(GreenLine).length).toBe(3);
    expect(component.find('.bottom-gradient').exists()).toBe(true);
  });
});
