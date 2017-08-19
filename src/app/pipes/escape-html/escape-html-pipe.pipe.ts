import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'keepHtml',
  pure: false
})
export class EscapeHtmlPipePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }
  /*transform(value: any, args?: any): any {
    return null;
  }*/
  transform(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
