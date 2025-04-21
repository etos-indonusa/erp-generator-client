import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceShareHeaderComponent } from './maintenance-share-header.component';

describe('MaintenanceShareHeaderComponent', () => {
  let component: MaintenanceShareHeaderComponent;
  let fixture: ComponentFixture<MaintenanceShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
