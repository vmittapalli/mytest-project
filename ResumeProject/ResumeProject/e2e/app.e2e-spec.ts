import { ResumeProjectPage } from './app.po';

describe('resume-project App', () => {
  let page: ResumeProjectPage;

  beforeEach(() => {
    page = new ResumeProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
