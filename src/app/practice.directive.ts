import { Directive, ElementRef, HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPractice]'
})
export class PracticeDirective {
  constructor(private el: ElementRef,private e1:Renderer2) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    /*console.log(this.el.el.nativeElement.innerHTML = 'HI';);*/

    this.highlight('yellow');

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }


  private highlight(color: string) {
    /*this.el.nativeElement.style.backgroundColor = color;*/

  }
}
