import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component11Component } from './component11.component';

describe('Component11Component', () => {
  let component: Component11Component;
  let fixture: ComponentFixture<Component11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
