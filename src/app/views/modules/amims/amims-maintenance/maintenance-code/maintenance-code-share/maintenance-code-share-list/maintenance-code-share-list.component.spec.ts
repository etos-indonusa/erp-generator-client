import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCodeShareListComponent } from './maintenance-code-share-list.component';

describe('MaintenanceCodeShareListComponent', () => {
  let component: MaintenanceCodeShareListComponent;
  let fixture: ComponentFixture<MaintenanceCodeShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceCodeShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceCodeShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
