import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCodeShareAddComponent } from './maintenance-code-share-add.component';

describe('MaintenanceCodeShareAddComponent', () => {
  let component: MaintenanceCodeShareAddComponent;
  let fixture: ComponentFixture<MaintenanceCodeShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceCodeShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceCodeShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
