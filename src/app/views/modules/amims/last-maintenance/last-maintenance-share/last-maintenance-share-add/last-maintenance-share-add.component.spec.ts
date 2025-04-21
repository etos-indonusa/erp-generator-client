import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMaintenanceShareAddComponent } from './last-maintenance-share-add.component';

describe('LastMaintenanceShareAddComponent', () => {
  let component: LastMaintenanceShareAddComponent;
  let fixture: ComponentFixture<LastMaintenanceShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMaintenanceShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastMaintenanceShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
