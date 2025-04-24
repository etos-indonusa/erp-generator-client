import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceShareDetailComponent } from './maintenance-share-detail.component';

describe('MaintenanceShareDetailComponent', () => {
  let component: MaintenanceShareDetailComponent;
  let fixture: ComponentFixture<MaintenanceShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
