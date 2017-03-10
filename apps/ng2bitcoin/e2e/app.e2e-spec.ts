import { Ng2bitcoinPage } from './app.po';

describe('ng2bitcoin App', () => {
  let page: Ng2bitcoinPage;

  beforeEach(() => {
    page = new Ng2bitcoinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
