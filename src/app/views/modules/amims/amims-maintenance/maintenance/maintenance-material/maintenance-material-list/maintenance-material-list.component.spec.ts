import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceMaterialListComponent } from './maintenance-material-list.component';

describe('MaintenanceMaterialListComponent', () => {
  let component: MaintenanceMaterialListComponent;
  let fixture: ComponentFixture<MaintenanceMaterialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceMaterialListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceMaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
