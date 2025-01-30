import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHiighlight]'
})
export class HighlightDirective {

  constructor(private ele:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  
  private highlight(color: string | null) {
    this.ele.nativeElement.style.backgroundColor = color;
  }

}
