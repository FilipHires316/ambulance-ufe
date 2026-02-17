import { newSpecPage } from '@stencil/core/testing';
import { XhiresAmbulanceWlList } from '../xhires-ambulance-wl-list';

describe('xhires-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XhiresAmbulanceWlList],
      html: `<xhires-ambulance-wl-list></xhires-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xhires-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xhires-ambulance-wl-list>
    `);
  });
});
