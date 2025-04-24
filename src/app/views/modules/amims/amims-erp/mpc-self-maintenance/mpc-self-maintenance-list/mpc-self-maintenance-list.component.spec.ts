import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcSelfMaintenanceListComponent } from './mpc-self-maintenance-list.component';

describe('MpcSelfMaintenanceListComponent', () => {
  let component: MpcSelfMaintenanceListComponent;
  let fixture: ComponentFixture<MpcSelfMaintenanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcSelfMaintenanceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcSelfMaintenanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
