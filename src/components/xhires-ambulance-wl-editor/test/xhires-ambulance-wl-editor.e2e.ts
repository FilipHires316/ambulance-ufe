import { newE2EPage } from '@stencil/core/testing';

describe('xhires-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xhires-ambulance-wl-editor></xhires-ambulance-wl-editor>');

    const element = await page.find('xhires-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
