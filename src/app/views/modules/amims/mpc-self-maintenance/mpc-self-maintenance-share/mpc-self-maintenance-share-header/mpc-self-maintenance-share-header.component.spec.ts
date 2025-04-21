import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcSelfMaintenanceShareHeaderComponent } from './mpc-self-maintenance-share-header.component';

describe('MpcSelfMaintenanceShareHeaderComponent', () => {
  let component: MpcSelfMaintenanceShareHeaderComponent;
  let fixture: ComponentFixture<MpcSelfMaintenanceShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcSelfMaintenanceShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcSelfMaintenanceShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
