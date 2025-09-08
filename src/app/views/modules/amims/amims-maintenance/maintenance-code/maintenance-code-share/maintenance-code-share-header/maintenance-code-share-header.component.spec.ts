import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCodeShareHeaderComponent } from './maintenance-code-share-header.component';

describe('MaintenanceCodeShareHeaderComponent', () => {
  let component: MaintenanceCodeShareHeaderComponent;
  let fixture: ComponentFixture<MaintenanceCodeShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceCodeShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceCodeShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
