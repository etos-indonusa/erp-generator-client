import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProgramMaterialShareAddComponent } from './maintenance-program-material-share-add.component';

describe('MaintenanceProgramMaterialShareAddComponent', () => {
  let component: MaintenanceProgramMaterialShareAddComponent;
  let fixture: ComponentFixture<MaintenanceProgramMaterialShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceProgramMaterialShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceProgramMaterialShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
