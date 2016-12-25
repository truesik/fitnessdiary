import { FitnessdiaryPage } from './app.po';

describe('fitnessdiary App', function() {
  let page: FitnessdiaryPage;

  beforeEach(() => {
    page = new FitnessdiaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
