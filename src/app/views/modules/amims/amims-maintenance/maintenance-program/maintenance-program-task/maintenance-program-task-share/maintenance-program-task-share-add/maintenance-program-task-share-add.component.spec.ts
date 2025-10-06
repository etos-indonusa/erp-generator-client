import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProgramTaskShareAddComponent } from './maintenance-program-task-share-add.component';

describe('MaintenanceProgramTaskShareAddComponent', () => {
  let component: MaintenanceProgramTaskShareAddComponent;
  let fixture: ComponentFixture<MaintenanceProgramTaskShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceProgramTaskShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceProgramTaskShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
