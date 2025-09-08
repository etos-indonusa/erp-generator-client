import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnscheduleMaintenanceShareWidgetComponent } from './unschedule-maintenance-share-widget.component';

describe('UnscheduleMaintenanceShareWidgetComponent', () => {
  let component: UnscheduleMaintenanceShareWidgetComponent;
  let fixture: ComponentFixture<UnscheduleMaintenanceShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnscheduleMaintenanceShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnscheduleMaintenanceShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
