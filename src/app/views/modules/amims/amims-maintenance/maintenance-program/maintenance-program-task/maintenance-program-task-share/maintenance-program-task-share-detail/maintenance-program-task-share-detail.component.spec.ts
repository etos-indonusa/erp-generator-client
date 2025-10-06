import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProgramTaskShareDetailComponent } from './maintenance-program-task-share-detail.component';

describe('MaintenanceProgramTaskShareDetailComponent', () => {
  let component: MaintenanceProgramTaskShareDetailComponent;
  let fixture: ComponentFixture<MaintenanceProgramTaskShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceProgramTaskShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceProgramTaskShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
