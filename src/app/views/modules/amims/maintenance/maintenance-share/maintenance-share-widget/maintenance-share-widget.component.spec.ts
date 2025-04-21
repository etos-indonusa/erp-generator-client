import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceShareWidgetComponent } from './maintenance-share-widget.component';

describe('MaintenanceShareWidgetComponent', () => {
  let component: MaintenanceShareWidgetComponent;
  let fixture: ComponentFixture<MaintenanceShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
