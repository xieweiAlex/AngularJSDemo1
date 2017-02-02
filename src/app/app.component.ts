import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <h1>
  {{title}}
  </h1>
  
  Counter Component
  <div>
  
  <!--// solution2-->
  <!--<app-counter [counter]= "ComponentCounterValue" (counterChangedEvent)="counterValueChanged($event)"></app-counter>-->
  
  <!--// solution1-->
  <app-counter [counter]= "ComponentCounterValue" (counterChangedEvent)="ComponentCounterValue=$event"></app-counter>
  </div>
  <br/>
  <br/>
  
  Component Counter Value = {{ ComponentCounterValue }} 
  
  `,

  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';

  ComponentCounterValue = 10;

  // solution2
  counterValueChanged(message: number) {
    this.ComponentCounterValue = message;

    return false;
  }
}




