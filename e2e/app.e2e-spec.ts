import { IgricaPage } from './app.po';

describe('igrica App', function() {
  let page: IgricaPage;

  beforeEach(() => {
    page = new IgricaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
