import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMaintenanceRtComponent } from './schedule-maintenance-rt.component';

describe('ScheduleMaintenanceRtComponent', () => {
  let component: ScheduleMaintenanceRtComponent;
  let fixture: ComponentFixture<ScheduleMaintenanceRtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleMaintenanceRtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleMaintenanceRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
