import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProgramShareDetailComponent } from './maintenance-program-share-detail.component';

describe('MaintenanceProgramShareDetailComponent', () => {
  let component: MaintenanceProgramShareDetailComponent;
  let fixture: ComponentFixture<MaintenanceProgramShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceProgramShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceProgramShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
