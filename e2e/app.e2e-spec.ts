import { TueAppPage } from './app.po';

describe('tue-app App', function() {
  let page: TueAppPage;

  beforeEach(() => {
    page = new TueAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
