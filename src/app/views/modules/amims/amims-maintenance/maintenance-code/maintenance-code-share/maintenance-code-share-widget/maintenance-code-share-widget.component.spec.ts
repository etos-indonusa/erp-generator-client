import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCodeShareWidgetComponent } from './maintenance-code-share-widget.component';

describe('MaintenanceCodeShareWidgetComponent', () => {
  let component: MaintenanceCodeShareWidgetComponent;
  let fixture: ComponentFixture<MaintenanceCodeShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceCodeShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceCodeShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
