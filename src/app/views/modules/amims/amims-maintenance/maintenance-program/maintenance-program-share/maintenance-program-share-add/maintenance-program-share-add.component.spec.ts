import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProgramShareAddComponent } from './maintenance-program-share-add.component';

describe('MaintenanceProgramShareAddComponent', () => {
  let component: MaintenanceProgramShareAddComponent;
  let fixture: ComponentFixture<MaintenanceProgramShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceProgramShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceProgramShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
