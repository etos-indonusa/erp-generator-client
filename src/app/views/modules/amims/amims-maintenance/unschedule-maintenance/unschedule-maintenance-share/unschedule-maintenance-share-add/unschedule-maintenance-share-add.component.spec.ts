import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnscheduleMaintenanceShareAddComponent } from './unschedule-maintenance-share-add.component';

describe('UnscheduleMaintenanceShareAddComponent', () => {
  let component: UnscheduleMaintenanceShareAddComponent;
  let fixture: ComponentFixture<UnscheduleMaintenanceShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnscheduleMaintenanceShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnscheduleMaintenanceShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
