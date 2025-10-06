import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProgramDocumentListComponent } from './maintenance-program-document-list.component';

describe('MaintenanceProgramDocumentListComponent', () => {
  let component: MaintenanceProgramDocumentListComponent;
  let fixture: ComponentFixture<MaintenanceProgramDocumentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceProgramDocumentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceProgramDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
