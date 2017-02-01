import {Component, Input, EventEmitter, Output} from '@angular/core';

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
  counterChanged: EventEmitter<number>;

  constructor() {
    this.counterChanged = new EventEmitter();
  }

  @Input() set counter(value :number) {
    if (value > 0) {
      this.countValue = value;
      this.counterChanged.emit(this.countValue);
    }
  }

  @Output('') counterChange: number;

  changeCounterValue(value: number) {

    this.countValue += value;
    this.counterChanged.emit(this.countValue);
  }

  increase() {
    this.changeCounterValue(1);
  }

  decrease() {
    this.changeCounterValue(-1);
  }


}




