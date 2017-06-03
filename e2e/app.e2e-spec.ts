import { Ng4ObservablesPage } from './app.po';

describe('ng4-observables App', () => {
  let page: Ng4ObservablesPage;

  beforeEach(() => {
    page = new Ng4ObservablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
