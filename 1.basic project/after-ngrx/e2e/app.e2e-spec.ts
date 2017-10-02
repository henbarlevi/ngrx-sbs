import { BeforePage } from './app.po';

describe('before App', function() {
  let page: BeforePage;

  beforeEach(() => {
    page = new BeforePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
