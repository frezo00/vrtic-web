import { SanitizeHtmlPipe } from './sanitize-html.pipe';

class DomSanitizerMock {
  static sanitize: () => 'safeString';
  static bypassSecurityTrustHtml: () => 'safeString';
  static bypassSecurityTrustStyle: () => 'safeString';
  static bypassSecurityTrustScript: () => 'safeString';
  static bypassSecurityTrustUrl: () => 'safeString';
  static bypassSecurityTrustResourceUrl: () => 'safeString';
}

describe('SanitizeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeHtmlPipe(DomSanitizerMock);
    expect(pipe).toBeTruthy();
  });
});
