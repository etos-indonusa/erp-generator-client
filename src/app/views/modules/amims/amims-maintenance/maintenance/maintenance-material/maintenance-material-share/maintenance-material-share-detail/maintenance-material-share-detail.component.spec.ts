import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceMaterialShareDetailComponent } from './maintenance-material-share-detail.component';

describe('MaintenanceMaterialShareDetailComponent', () => {
  let component: MaintenanceMaterialShareDetailComponent;
  let fixture: ComponentFixture<MaintenanceMaterialShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceMaterialShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceMaterialShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
