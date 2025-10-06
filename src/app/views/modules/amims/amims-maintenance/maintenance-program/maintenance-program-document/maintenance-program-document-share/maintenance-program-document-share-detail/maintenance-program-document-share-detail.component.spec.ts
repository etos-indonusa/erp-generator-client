import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProgramDocumentShareDetailComponent } from './maintenance-program-document-share-detail.component';

describe('MaintenanceProgramDocumentShareDetailComponent', () => {
  let component: MaintenanceProgramDocumentShareDetailComponent;
  let fixture: ComponentFixture<MaintenanceProgramDocumentShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceProgramDocumentShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceProgramDocumentShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
