import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProgramMaterialListComponent } from './maintenance-program-material-list.component';

describe('MaintenanceProgramMaterialListComponent', () => {
  let component: MaintenanceProgramMaterialListComponent;
  let fixture: ComponentFixture<MaintenanceProgramMaterialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceProgramMaterialListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceProgramMaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
