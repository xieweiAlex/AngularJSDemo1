import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',

  template: ` 
  <button (click)="increase()"> + </button>
  {{ countValue }}
  <button (click)="decrease()"> - </button>
  `,
  styles: []

})

export class CounterComponent {
  countValue =  0;

  increase() {
    this.countValue += 1;
  }

  decrease() {
    this.countValue -= 1;
  }

}
