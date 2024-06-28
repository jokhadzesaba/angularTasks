import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight?: string;
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    if (this.appHighlight) {
      this.highlight(this.appHighlight);
    }
  }
  private highlight(type: string) {
    if (type === 'movie') {
      this.el.nativeElement.style.backgroundColor = 'lightblue';
    } else if (type === 'tvSeries') {
      this.el.nativeElement.style.backgroundColor = 'lightgreen';
    } else if (type === 'video') {
      this.el.nativeElement.style.backgroundColor = 'lightsalmon';
    } else {
      this.el.nativeElement.style.backgroundColor = 'lightpink';
    }
  }
}
