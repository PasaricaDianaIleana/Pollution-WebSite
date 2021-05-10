import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChart3Component } from './line-chart3.component';

describe('LineChart3Component', () => {
  let component: LineChart3Component;
  let fixture: ComponentFixture<LineChart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
