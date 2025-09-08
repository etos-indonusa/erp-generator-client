import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnscheduleMaintenanceShareListComponent } from './unschedule-maintenance-share-list.component';

describe('UnscheduleMaintenanceShareListComponent', () => {
  let component: UnscheduleMaintenanceShareListComponent;
  let fixture: ComponentFixture<UnscheduleMaintenanceShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnscheduleMaintenanceShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnscheduleMaintenanceShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
