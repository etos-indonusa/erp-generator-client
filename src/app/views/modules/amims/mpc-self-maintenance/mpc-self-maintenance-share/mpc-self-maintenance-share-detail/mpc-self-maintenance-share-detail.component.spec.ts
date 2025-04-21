import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcSelfMaintenanceShareDetailComponent } from './mpc-self-maintenance-share-detail.component';

describe('MpcSelfMaintenanceShareDetailComponent', () => {
  let component: MpcSelfMaintenanceShareDetailComponent;
  let fixture: ComponentFixture<MpcSelfMaintenanceShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcSelfMaintenanceShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcSelfMaintenanceShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
