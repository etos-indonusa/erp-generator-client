import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMaintenanceShareDetailComponent } from './last-maintenance-share-detail.component';

describe('LastMaintenanceShareDetailComponent', () => {
  let component: LastMaintenanceShareDetailComponent;
  let fixture: ComponentFixture<LastMaintenanceShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMaintenanceShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastMaintenanceShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
