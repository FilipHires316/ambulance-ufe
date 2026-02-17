import { newE2EPage } from '@stencil/core/testing';

describe('xhires-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xhires-ambulance-wl-list></xhires-ambulance-wl-list>');

    const element = await page.find('xhires-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
