import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionMonitoringShareListComponent } from './condition-monitoring-share-list.component';

describe('ConditionMonitoringShareListComponent', () => {
  let component: ConditionMonitoringShareListComponent;
  let fixture: ComponentFixture<ConditionMonitoringShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionMonitoringShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionMonitoringShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
