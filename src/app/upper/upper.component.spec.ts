/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UpperComponent } from './upper.component';

describe('UpperComponent', () => {
  let component: UpperComponent;
  let fixture: ComponentFixture<UpperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
