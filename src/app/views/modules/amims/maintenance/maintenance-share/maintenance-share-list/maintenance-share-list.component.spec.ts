import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceShareListComponent } from './maintenance-share-list.component';

describe('MaintenanceShareListComponent', () => {
  let component: MaintenanceShareListComponent;
  let fixture: ComponentFixture<MaintenanceShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
