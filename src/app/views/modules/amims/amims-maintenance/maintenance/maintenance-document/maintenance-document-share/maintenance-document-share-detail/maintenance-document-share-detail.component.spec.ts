import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceDocumentShareDetailComponent } from './maintenance-document-share-detail.component';

describe('MaintenanceDocumentShareDetailComponent', () => {
  let component: MaintenanceDocumentShareDetailComponent;
  let fixture: ComponentFixture<MaintenanceDocumentShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceDocumentShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceDocumentShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
