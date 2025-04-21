import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCodeShareDetailComponent } from './maintenance-code-share-detail.component';

describe('MaintenanceCodeShareDetailComponent', () => {
  let component: MaintenanceCodeShareDetailComponent;
  let fixture: ComponentFixture<MaintenanceCodeShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceCodeShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceCodeShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
