import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProgramListComponent } from './maintenance-program-list.component';

describe('MaintenanceProgramListComponent', () => {
  let component: MaintenanceProgramListComponent;
  let fixture: ComponentFixture<MaintenanceProgramListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceProgramListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceProgramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
