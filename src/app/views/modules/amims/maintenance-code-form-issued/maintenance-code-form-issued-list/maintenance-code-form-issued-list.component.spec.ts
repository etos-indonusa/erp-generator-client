import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCodeFormIssuedListComponent } from './maintenance-code-form-issued-list.component';

describe('MaintenanceCodeFormIssuedListComponent', () => {
  let component: MaintenanceCodeFormIssuedListComponent;
  let fixture: ComponentFixture<MaintenanceCodeFormIssuedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceCodeFormIssuedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceCodeFormIssuedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
