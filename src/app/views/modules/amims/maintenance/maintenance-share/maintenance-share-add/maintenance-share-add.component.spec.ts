import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceShareAddComponent } from './maintenance-share-add.component';

describe('MaintenanceShareAddComponent', () => {
  let component: MaintenanceShareAddComponent;
  let fixture: ComponentFixture<MaintenanceShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
