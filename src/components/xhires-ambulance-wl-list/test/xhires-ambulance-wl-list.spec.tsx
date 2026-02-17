import { newSpecPage } from '@stencil/core/testing';
import { XhiresAmbulanceWlList } from '../xhires-ambulance-wl-list';

describe('xhires-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XhiresAmbulanceWlList],
      html: `<xhires-ambulance-wl-list></xhires-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as XhiresAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients); 
  });
});
