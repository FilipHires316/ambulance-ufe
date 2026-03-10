import { newSpecPage } from '@stencil/core/testing';
import { XhiresAmbulanceWlApp } from '../xhires-ambulance-wl-app';

describe('xhires-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XhiresAmbulanceWlApp],
      html: `<xhires-ambulance-wl-app base-path="/"></xhires-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("xhires-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XhiresAmbulanceWlApp],
      html: `<xhires-ambulance-wl-app base-path="/ambulance-wl/"></xhires-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("xhires-ambulance-wl-list");
  });
});