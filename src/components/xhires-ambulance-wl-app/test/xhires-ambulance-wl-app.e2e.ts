import { newE2EPage } from '@stencil/core/testing';

describe('xhires-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xhires-ambulance-wl-app></xhires-ambulance-wl-app>');

    const element = await page.find('xhires-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
