import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCodeFormIssuedShareDetailComponent } from './maintenance-code-form-issued-share-detail.component';

describe('MaintenanceCodeFormIssuedShareDetailComponent', () => {
  let component: MaintenanceCodeFormIssuedShareDetailComponent;
  let fixture: ComponentFixture<MaintenanceCodeFormIssuedShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceCodeFormIssuedShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceCodeFormIssuedShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
