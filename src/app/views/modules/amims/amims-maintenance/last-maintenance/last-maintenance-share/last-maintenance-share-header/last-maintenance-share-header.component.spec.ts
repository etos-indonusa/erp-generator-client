import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMaintenanceShareHeaderComponent } from './last-maintenance-share-header.component';

describe('LastMaintenanceShareHeaderComponent', () => {
  let component: LastMaintenanceShareHeaderComponent;
  let fixture: ComponentFixture<LastMaintenanceShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMaintenanceShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastMaintenanceShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
