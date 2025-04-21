import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCodeReferenceListComponent } from './maintenance-code-reference-list.component';

describe('MaintenanceCodeReferenceListComponent', () => {
  let component: MaintenanceCodeReferenceListComponent;
  let fixture: ComponentFixture<MaintenanceCodeReferenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceCodeReferenceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceCodeReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
