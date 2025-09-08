import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnscheduleMaintenanceListComponent } from './unschedule-maintenance-list.component';

describe('UnscheduleMaintenanceListComponent', () => {
  let component: UnscheduleMaintenanceListComponent;
  let fixture: ComponentFixture<UnscheduleMaintenanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnscheduleMaintenanceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnscheduleMaintenanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
