import { Angular4ModelPage } from './app.po';

describe('angular4-model App', () => {
  let page: Angular4ModelPage;

  beforeEach(() => {
    page = new Angular4ModelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
