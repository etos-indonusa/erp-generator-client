import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionMonitoringShareWidgetComponent } from './condition-monitoring-share-widget.component';

describe('ConditionMonitoringShareWidgetComponent', () => {
  let component: ConditionMonitoringShareWidgetComponent;
  let fixture: ComponentFixture<ConditionMonitoringShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionMonitoringShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionMonitoringShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
