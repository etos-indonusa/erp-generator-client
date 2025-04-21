import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCodeListComponent } from './maintenance-code-list.component';

describe('MaintenanceCodeListComponent', () => {
  let component: MaintenanceCodeListComponent;
  let fixture: ComponentFixture<MaintenanceCodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceCodeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
