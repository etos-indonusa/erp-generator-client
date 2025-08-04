import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMaintenanceOhComponent } from './schedule-maintenance-oh.component';

describe('ScheduleMaintenanceOhComponent', () => {
  let component: ScheduleMaintenanceOhComponent;
  let fixture: ComponentFixture<ScheduleMaintenanceOhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleMaintenanceOhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleMaintenanceOhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
