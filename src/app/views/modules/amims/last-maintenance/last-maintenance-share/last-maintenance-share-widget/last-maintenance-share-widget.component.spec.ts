import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMaintenanceShareWidgetComponent } from './last-maintenance-share-widget.component';

describe('LastMaintenanceShareWidgetComponent', () => {
  let component: LastMaintenanceShareWidgetComponent;
  let fixture: ComponentFixture<LastMaintenanceShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMaintenanceShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastMaintenanceShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
