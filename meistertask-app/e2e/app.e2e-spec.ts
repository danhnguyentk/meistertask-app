import { MeistertaskAppPage } from './app.po';

describe('meistertask-app App', () => {
  let page: MeistertaskAppPage;

  beforeEach(() => {
    page = new MeistertaskAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
