import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-upper',
  template:
  `
  <ul>
    <li *ngFor="let item of items" appUpper> {{ item }}</li>
  </ul>

  `,
  styleUrls: ['./upper.component.css']
})


export class UpperComponent {
  constructor() { }

  @Input() items: Array<String>;


}




