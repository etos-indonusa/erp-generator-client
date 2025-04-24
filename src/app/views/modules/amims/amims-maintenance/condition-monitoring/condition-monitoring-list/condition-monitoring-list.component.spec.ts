import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionMonitoringListComponent } from './condition-monitoring-list.component';

describe('ConditionMonitoringListComponent', () => {
  let component: ConditionMonitoringListComponent;
  let fixture: ComponentFixture<ConditionMonitoringListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionMonitoringListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionMonitoringListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
