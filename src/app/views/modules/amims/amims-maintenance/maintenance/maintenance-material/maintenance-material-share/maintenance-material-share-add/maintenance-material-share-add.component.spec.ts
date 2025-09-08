import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceMaterialShareAddComponent } from './maintenance-material-share-add.component';

describe('MaintenanceMaterialShareAddComponent', () => {
  let component: MaintenanceMaterialShareAddComponent;
  let fixture: ComponentFixture<MaintenanceMaterialShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceMaterialShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceMaterialShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
