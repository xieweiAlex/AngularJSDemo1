import {Directive, ElementRef, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[appUpper]'
})

export class UpperDirective implements AfterViewInit {

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {

    var text = this.element.nativeElement.innerText;
    this.element.nativeElement.innerText = text.toUpperCase();
  }

}
