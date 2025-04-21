import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMaintenanceListComponent } from './last-maintenance-list.component';

describe('LastMaintenanceListComponent', () => {
  let component: LastMaintenanceListComponent;
  let fixture: ComponentFixture<LastMaintenanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMaintenanceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastMaintenanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
