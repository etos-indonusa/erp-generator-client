import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProgramDocumentShareAddComponent } from './maintenance-program-document-share-add.component';

describe('MaintenanceProgramDocumentShareAddComponent', () => {
  let component: MaintenanceProgramDocumentShareAddComponent;
  let fixture: ComponentFixture<MaintenanceProgramDocumentShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceProgramDocumentShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceProgramDocumentShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
