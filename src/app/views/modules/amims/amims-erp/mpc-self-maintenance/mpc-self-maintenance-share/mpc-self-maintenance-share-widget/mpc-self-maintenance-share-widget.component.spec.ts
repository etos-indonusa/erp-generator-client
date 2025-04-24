import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcSelfMaintenanceShareWidgetComponent } from './mpc-self-maintenance-share-widget.component';

describe('MpcSelfMaintenanceShareWidgetComponent', () => {
  let component: MpcSelfMaintenanceShareWidgetComponent;
  let fixture: ComponentFixture<MpcSelfMaintenanceShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcSelfMaintenanceShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcSelfMaintenanceShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
