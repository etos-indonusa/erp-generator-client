import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetV1Component } from './widget-v1.component';

describe('WidgetV1Component', () => {
  let component: WidgetV1Component;
  let fixture: ComponentFixture<WidgetV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
