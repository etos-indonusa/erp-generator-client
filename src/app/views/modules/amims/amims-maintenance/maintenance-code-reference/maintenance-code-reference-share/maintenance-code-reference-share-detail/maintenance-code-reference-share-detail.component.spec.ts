import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCodeReferenceShareDetailComponent } from './maintenance-code-reference-share-detail.component';

describe('MaintenanceCodeReferenceShareDetailComponent', () => {
  let component: MaintenanceCodeReferenceShareDetailComponent;
  let fixture: ComponentFixture<MaintenanceCodeReferenceShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceCodeReferenceShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceCodeReferenceShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
