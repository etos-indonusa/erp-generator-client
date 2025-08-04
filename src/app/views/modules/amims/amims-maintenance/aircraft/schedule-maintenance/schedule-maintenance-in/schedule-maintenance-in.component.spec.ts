import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMaintenanceInComponent } from './schedule-maintenance-in.component';

describe('ScheduleMaintenanceInComponent', () => {
  let component: ScheduleMaintenanceInComponent;
  let fixture: ComponentFixture<ScheduleMaintenanceInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleMaintenanceInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleMaintenanceInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
