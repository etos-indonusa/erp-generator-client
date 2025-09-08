import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnscheduleMaintenanceShareDetailComponent } from './unschedule-maintenance-share-detail.component';

describe('UnscheduleMaintenanceShareDetailComponent', () => {
  let component: UnscheduleMaintenanceShareDetailComponent;
  let fixture: ComponentFixture<UnscheduleMaintenanceShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnscheduleMaintenanceShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnscheduleMaintenanceShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
