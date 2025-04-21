import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionMonitoringShareAddComponent } from './condition-monitoring-share-add.component';

describe('ConditionMonitoringShareAddComponent', () => {
  let component: ConditionMonitoringShareAddComponent;
  let fixture: ComponentFixture<ConditionMonitoringShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionMonitoringShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionMonitoringShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
