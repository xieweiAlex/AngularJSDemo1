import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-counter',

  template: ` 
  <button (click)="increase()"> + </button>
  {{ countValue }}
  <button (click)="decrease()"> - </button>
  `,

  outputs: ['counterChangedEvent'],
  styles: []
})

export class CounterComponent {

  countValue =  0;
  counterChangedEvent: EventEmitter<number>;

  constructor() {
    this.counterChangedEvent = new EventEmitter();
  }

  @Input() set counter(value :number) {
    if (value > 0) {
      this.countValue = value;
      this.counterChangedEvent.emit(this.countValue);

      console.log("set initial value from Parent component: " + value);
    }
  }


  private _changeCounterValue(value: number) {

    this.countValue += value;
    this.counterChangedEvent.emit(this.countValue);
  }

  increase() {
    this._changeCounterValue(1);
  }

  decrease() {
    this._changeCounterValue(-1);
  }

}





