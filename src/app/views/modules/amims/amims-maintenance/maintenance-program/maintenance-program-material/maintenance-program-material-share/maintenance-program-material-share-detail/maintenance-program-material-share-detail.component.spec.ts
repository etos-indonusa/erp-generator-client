import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProgramMaterialShareDetailComponent } from './maintenance-program-material-share-detail.component';

describe('MaintenanceProgramMaterialShareDetailComponent', () => {
  let component: MaintenanceProgramMaterialShareDetailComponent;
  let fixture: ComponentFixture<MaintenanceProgramMaterialShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceProgramMaterialShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceProgramMaterialShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
