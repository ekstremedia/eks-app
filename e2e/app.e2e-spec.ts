import { EksAppPage } from './app.po';

describe('eks-app App', function() {
  let page: EksAppPage;

  beforeEach(() => {
    page = new EksAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
