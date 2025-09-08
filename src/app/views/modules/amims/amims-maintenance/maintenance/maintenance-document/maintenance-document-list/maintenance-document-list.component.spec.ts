import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceDocumentListComponent } from './maintenance-document-list.component';

describe('MaintenanceDocumentListComponent', () => {
  let component: MaintenanceDocumentListComponent;
  let fixture: ComponentFixture<MaintenanceDocumentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceDocumentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
