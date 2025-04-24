import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpartDetailLastMaintenanceComponent } from './mpart-detail-last-maintenance.component';

describe('MpartDetailLastMaintenanceComponent', () => {
  let component: MpartDetailLastMaintenanceComponent;
  let fixture: ComponentFixture<MpartDetailLastMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpartDetailLastMaintenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpartDetailLastMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
