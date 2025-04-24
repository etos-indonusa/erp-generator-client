import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpartDetailRoutineMaintenanceComponent } from './mpart-detail-routine-maintenance.component';

describe('MpartDetailRoutineMaintenanceComponent', () => {
  let component: MpartDetailRoutineMaintenanceComponent;
  let fixture: ComponentFixture<MpartDetailRoutineMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpartDetailRoutineMaintenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpartDetailRoutineMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
