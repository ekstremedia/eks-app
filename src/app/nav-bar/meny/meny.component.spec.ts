/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MenyComponent } from './meny.component';

describe('MenyComponent', () => {
  let component: MenyComponent;
  let fixture: ComponentFixture<MenyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
