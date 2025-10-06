import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProgramShareListComponent } from './maintenance-program-share-list.component';

describe('MaintenanceProgramShareListComponent', () => {
  let component: MaintenanceProgramShareListComponent;
  let fixture: ComponentFixture<MaintenanceProgramShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceProgramShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceProgramShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
