import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionMonitoringShareHeaderComponent } from './condition-monitoring-share-header.component';

describe('ConditionMonitoringShareHeaderComponent', () => {
  let component: ConditionMonitoringShareHeaderComponent;
  let fixture: ComponentFixture<ConditionMonitoringShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionMonitoringShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionMonitoringShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
