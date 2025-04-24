import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcSelfMaintenanceShareAddComponent } from './mpc-self-maintenance-share-add.component';

describe('MpcSelfMaintenanceShareAddComponent', () => {
  let component: MpcSelfMaintenanceShareAddComponent;
  let fixture: ComponentFixture<MpcSelfMaintenanceShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcSelfMaintenanceShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcSelfMaintenanceShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
