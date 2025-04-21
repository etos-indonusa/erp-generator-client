import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCodeFormIssuedShareAddComponent } from './maintenance-code-form-issued-share-add.component';

describe('MaintenanceCodeFormIssuedShareAddComponent', () => {
  let component: MaintenanceCodeFormIssuedShareAddComponent;
  let fixture: ComponentFixture<MaintenanceCodeFormIssuedShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceCodeFormIssuedShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceCodeFormIssuedShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
