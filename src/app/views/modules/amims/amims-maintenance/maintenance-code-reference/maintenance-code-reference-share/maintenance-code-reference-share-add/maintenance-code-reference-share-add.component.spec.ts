import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCodeReferenceShareAddComponent } from './maintenance-code-reference-share-add.component';

describe('MaintenanceCodeReferenceShareAddComponent', () => {
  let component: MaintenanceCodeReferenceShareAddComponent;
  let fixture: ComponentFixture<MaintenanceCodeReferenceShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceCodeReferenceShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceCodeReferenceShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
