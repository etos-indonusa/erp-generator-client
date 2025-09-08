import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnscheduleMaintenanceShareHeaderComponent } from './unschedule-maintenance-share-header.component';

describe('UnscheduleMaintenanceShareHeaderComponent', () => {
  let component: UnscheduleMaintenanceShareHeaderComponent;
  let fixture: ComponentFixture<UnscheduleMaintenanceShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnscheduleMaintenanceShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnscheduleMaintenanceShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
