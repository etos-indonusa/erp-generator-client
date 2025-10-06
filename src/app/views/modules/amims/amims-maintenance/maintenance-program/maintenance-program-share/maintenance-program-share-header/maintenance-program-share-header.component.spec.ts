import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProgramShareHeaderComponent } from './maintenance-program-share-header.component';

describe('MaintenanceProgramShareHeaderComponent', () => {
  let component: MaintenanceProgramShareHeaderComponent;
  let fixture: ComponentFixture<MaintenanceProgramShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceProgramShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceProgramShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
