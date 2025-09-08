import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceDocumentShareAddComponent } from './maintenance-document-share-add.component';

describe('MaintenanceDocumentShareAddComponent', () => {
  let component: MaintenanceDocumentShareAddComponent;
  let fixture: ComponentFixture<MaintenanceDocumentShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceDocumentShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceDocumentShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
