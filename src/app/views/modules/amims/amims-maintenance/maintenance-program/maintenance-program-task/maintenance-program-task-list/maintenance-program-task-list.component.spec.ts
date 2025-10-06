import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProgramTaskListComponent } from './maintenance-program-task-list.component';

describe('MaintenanceProgramTaskListComponent', () => {
  let component: MaintenanceProgramTaskListComponent;
  let fixture: ComponentFixture<MaintenanceProgramTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceProgramTaskListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceProgramTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
