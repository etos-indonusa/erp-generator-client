import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcSelfMaintenanceShareListComponent } from './mpc-self-maintenance-share-list.component';

describe('MpcSelfMaintenanceShareListComponent', () => {
  let component: MpcSelfMaintenanceShareListComponent;
  let fixture: ComponentFixture<MpcSelfMaintenanceShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcSelfMaintenanceShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcSelfMaintenanceShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
