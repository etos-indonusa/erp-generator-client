import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionMonitoringShareDetailComponent } from './condition-monitoring-share-detail.component';

describe('ConditionMonitoringShareDetailComponent', () => {
  let component: ConditionMonitoringShareDetailComponent;
  let fixture: ComponentFixture<ConditionMonitoringShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionMonitoringShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionMonitoringShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
