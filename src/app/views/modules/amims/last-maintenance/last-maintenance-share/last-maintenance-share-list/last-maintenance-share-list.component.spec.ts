import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMaintenanceShareListComponent } from './last-maintenance-share-list.component';

describe('LastMaintenanceShareListComponent', () => {
  let component: LastMaintenanceShareListComponent;
  let fixture: ComponentFixture<LastMaintenanceShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMaintenanceShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastMaintenanceShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
