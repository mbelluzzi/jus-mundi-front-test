import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import PartnerBackground from './PartnerBackground.vue';
import GreenLine from '~/components/common/GreenLine/GreenLine.vue';
import Background from '~/components/common/Background/Background.vue';

describe('PartnerBackground.vue', () => {
  it('renders two GreenLine components with correct props', async () => {
    const wrapper = await mountSuspended(PartnerBackground);
    const greenLines = wrapper.findAllComponents(GreenLine);
    expect(greenLines.length).toBe(2);
    expect(greenLines[0].props()).toMatchObject({
      width: '30px',
      top: '40%',
      left: '5%',
      transform: 'rotate(0deg)',
    });
    expect(greenLines[1].props()).toMatchObject({
      width: '30px',
      top: '40%',
      left: '95%',
      transform: 'rotate(0deg)',
    });
  });

  it('renders inside a Background component', async () => {
    const wrapper = await mountSuspended(PartnerBackground);
    expect(wrapper.findComponent(Background).exists()).toBe(true);
  });
});
