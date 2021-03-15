/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetBookComponent } from './getBook.component';

describe('GetBookComponent', () => {
  let component: GetBookComponent;
  let fixture: ComponentFixture<GetBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
