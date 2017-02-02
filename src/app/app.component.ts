import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <h1>
  {{title}}
  </h1>
  
  Counter Component
  <div>
  
  
  <app-counter [counter]= "ComponentCounterValue" (counterChangedEvent)="ComponentCounterValue=$event"></app-counter>
  </div>
  <br/>
  <br/>
  Component Counter Value = {{ ComponentCounterValue }} 
  
  
  <app-upper [items]="['bbb', 'ccc']" ></app-upper>
  
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




