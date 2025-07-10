import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import PartnerShip from './PartnerShip.vue';

describe('PartnerShip.vue', () => {
  it('renders BlockQuote, heading, and IconTextBlock components', async () => {
    const component = await mountSuspended(PartnerShip);
    expect(component.findComponent({ name: 'BlockQuote' }).exists()).toBe(true);
    expect(component.text()).toContain('Why this partnership?');
    const iconBlocks = component.findAllComponents({ name: 'IconTextBlock' });
    expect(iconBlocks.length).toBe(3);
    expect(component.find('#partnership').exists()).toBe(true);
  });
});
